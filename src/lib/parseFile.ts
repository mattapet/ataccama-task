//#region imports
import { Data, Kid, Kids, Record, Records, File } from 'lib/types/File';
//#endregion

let _id: number = 0;

/**
 * Returns `true` if given value is non-`null` object, otherwise `false`.
 */
function _isObject(payload: any): boolean {
  return !payload || typeof payload !== 'object';
}

/**
 * Returns payload as `Data`.
 * @throws Error In case the shape of data does not conform to `Data` type.
 */
export function parseData(payload: any): Data {
  if (_isObject(payload)) {
    throw new Error('Invalid JSON structure');
  }
  return Object.keys(payload).reduce(
    (partial, nextKey) => {
      if (typeof payload[nextKey] !== 'string') {
        throw new Error('Invalid JSON structure');
      }
      return { ...partial, [nextKey]: payload[nextKey] };
    },
    {} as Data
  );
}

/**
 * Returns payload as `Kid`.
 * @throws Error In case the shape of data does not conform to `Kid` type.
 */
export function parseKid(payload: any): Kid {
  if (_isObject(payload)) {
    throw new Error('Invalid JSON structure');
  }
  const { records } = payload;
  return { records: parseRecords(records) };
}

/**
 * Returns payload as `Kids`.
 * @throws Error In case the shape of data does not conform to `Kids` type.
 */
export function parseKids(payload: any): Kids {
  if (_isObject(payload)) {
    throw new Error('Invalid JSON structure');
  }
  return Object.keys(payload).reduce(
    (partial, nextKey) => ({
      ...partial,
      [nextKey]: parseKid(payload[nextKey]),
    }),
    {}
  );
}

/**
 * Returns payload as `Record`.
 * @throws Error In case the shape of data does not conform to `Record` type.
 */
export function parseRecord(payload: any): Record {
  if (_isObject(payload)) {
    throw new Error('Invalid JSON structure');
  }
  const { data, kids } = payload;
  return {
    // Ensure we can uniquely identify each record
    _id: `${++_id}`,
    data: parseData(data),
    kids: parseKids(kids),
  };
}

/**
 * Returns payload as `Records`.
 * @throws Error In case the shape of data does not conform to `Records` type.
 */
export function parseRecords(payload: any): Records {
  if (!Array.isArray(payload)) {
    throw new Error('Invalid JSON structure');
  }
  return payload.map(parseRecord);
}

/**
 * Returns payload as `File`.
 * @throws Error In case the shape of data does not conform to `File` type.
 */
function parseFile(file: string): File {
  const payload = JSON.parse(file);
  return parseRecords(payload);
}

export default parseFile;
