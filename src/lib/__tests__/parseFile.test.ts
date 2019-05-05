//#region imports
import {
  parseData,
  parseKid,
  parseKids,
  parseRecord,
  parseRecords,
} from '../parseFile';
import { Record } from 'lib/types/File';
//#endregion

//#region parseData
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = null;

  // Act
  // Assert
  expect(() => parseData(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = NaN;

  // Act
  // Assert
  expect(() => parseData(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = '';

  // Act
  // Assert
  expect(() => parseData(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = [null];

  // Act
  // Assert
  expect(() => parseData(payload)).toThrow(Error);
});
it('should throw `Error` on data having invalid type of values', () => {
  // Arrange
  const payload = { g: 4 };

  // Act
  // Assert
  expect(() => parseData(payload)).toThrow(Error);
});
it('should throw `Error` on data having invalid type of values', () => {
  // Arrange
  const payload = { g: null };

  // Act
  // Assert
  expect(() => parseData(payload)).toThrow(Error);
});
it('should throw `Error` on data having invalid type of values', () => {
  // Arrange
  const payload = { g: [] };

  // Act
  // Assert
  expect(() => parseData(payload)).toThrow(Error);
});
it('should throw `Error` on data having invalid type of values', () => {
  // Arrange
  const payload = { g: 't', h: 'f' };

  // Act
  const result = parseData(payload);
  // Assert
  expect(result).toEqual(payload);
});
//#endregion

//#region parseKid
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = null;

  // Act
  // Assert
  expect(() => parseKid(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = NaN;

  // Act
  // Assert
  expect(() => parseKid(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = '';

  // Act
  // Assert
  expect(() => parseKid(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = [null];

  // Act
  // Assert
  expect(() => parseKid(payload)).toThrow(Error);
});
it('should parse records', () => {
  // Arrage
  const payload = { records: [] };

  // Act
  const result = parseKid(payload);

  // Assert
  expect(result).toEqual(payload);
});
//#endregion

//#region parseKids
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = null;

  // Act
  // Assert
  expect(() => parseKids(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = NaN;

  // Act
  // Assert
  expect(() => parseKids(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = '';

  // Act
  // Assert
  expect(() => parseKids(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = [null];

  // Act
  // Assert
  expect(() => parseKids(payload)).toThrow(Error);
});
it('should parse kids properly', () => {
  // Arrange
  const payload = {};

  // Act
  const result = parseKids(payload);

  // Assert
  expect(result).toEqual(payload);
});
it('should parse kids properly', () => {
  // Arrange
  const payload = {
    f: { records: [] },
    g: { records: [] },
  };

  // Act
  const result = parseKids(payload);

  // Assert
  expect(result).toEqual(payload);
});
//#endregion

//#region parseRecord
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = null;

  // Act
  // Assert
  expect(() => parseRecord(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = NaN;

  // Act
  // Assert
  expect(() => parseRecord(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = '';

  // Act
  // Assert
  expect(() => parseRecord(payload)).toThrow(Error);
});
it('should throw `Error` payload not being object', () => {
  // Arrange
  const payload = [null];

  // Act
  // Assert
  expect(() => parseRecord(payload)).toThrow(Error);
});
it('should parse record properly', () => {
  // Arrange
  const payload = {
    data: {},
    kids: {},
  };

  // Act
  const result = parseRecord(payload);
  // Assert
  expect(result._id).toBeTruthy();
  expect(result.data).toEqual({});
  expect(result.kids).toEqual({});
});
it('should parse record properly', () => {
  // Arrange
  const payload = {
    data: {
      g: 't',
      f: 'g',
    },
    kids: {},
  };

  // Act
  const result = parseRecord(payload);
  // Assert
  expect(result._id).toBeTruthy();
  expect(result.data).toEqual({
    g: 't',
    f: 'g',
  });
  expect(result.kids).toEqual({});
});
//#endregion

//#region parseRecords
it('should throw `Error` payload not being array', () => {
  // Arrange
  const payload = null;

  // Act
  // Assert
  expect(() => parseRecords(payload)).toThrow(Error);
});
it('should throw `Error` payload not being array', () => {
  // Arrange
  const payload = NaN;

  // Act
  // Assert
  expect(() => parseRecords(payload)).toThrow(Error);
});
it('should throw `Error` payload not being array', () => {
  // Arrange
  const payload = '';

  // Act
  // Assert
  expect(() => parseRecords(payload)).toThrow(Error);
});
it('should throw `Error` payload not being array', () => {
  // Arrange
  const payload = {};

  // Act
  // Assert
  expect(() => parseRecords(payload)).toThrow(Error);
});
it('should properly parse records', () => {
  // Arrange
  const payload: any = [];

  // Act
  const result = parseRecords(payload);

  // Arrange
  expect(result).toEqual(payload);
});
it('should properly parse records', () => {
  // Arrange
  const payload: any = [
    {
      data: {
        g: 'g',
      },
      kids: {
        has_relatives: {
          records: [
            {
              data: {
                f: 't',
              },
              kids: {},
            },
          ],
        },
      },
    },
  ];

  // Act
  const result = parseRecords(payload);

  // Arrange
  let _id = parseInt(result[0]._id, 0);
  const expected: Record[] = [
    {
      _id: `${_id++}`,
      data: {
        g: 'g',
      },
      kids: {
        has_relatives: {
          records: [
            {
              _id: `${_id++}`,
              data: {
                f: 't',
              },
              kids: {},
            },
          ],
        },
      },
    },
  ];
  expect(result).toEqual(expected);
});
//#endregion
