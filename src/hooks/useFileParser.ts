//#region imports
import { useState, useEffect } from 'react';
import parseFile from 'lib/parseFile';
import { File as ParsedFile } from 'lib/types/File';
//#endregion

export interface FileParserValue {
  /**
   * Successfully parsed data of given file, otherwise `null`.
   */
  readonly data: ParsedFile | null;
  /**
   * An error encountered during reading and/or parsing the file, otherwise
   * `null`.
   */
  readonly error: Error | null;
}

/**
 * Custom hook that parses provided file using `parseFile` function.
 *
 * @param file File that is to be parsed.
 *
 * @returns Parsing result in shape of `FileParserValue`.
 */
function useFileParser(file: File | null): FileParserValue {
  const [data, setData] = useState<ParsedFile | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!file) {
      // Reset values if no file is selected
      setData(null);
      setError(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      try {
        setData(parseFile(reader.result as string));
        // Reset error if we have succeeded parsing
        setError(null);
      } catch (error) {
        setError(error);
      }
    };
    reader.onerror = () => setError(new Error('Error reading file.'));
    reader.readAsText(file);
  }, [file]);

  return { data, error };
}

export default useFileParser;
