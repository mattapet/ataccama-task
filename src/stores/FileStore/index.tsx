//#region imports
import React, { useState } from 'react';
//#endregion

//#region Component interfaces
export interface FileContextType {
  /**
   * Currently selected file. If no file is selected, the value is `null`.
   */
  readonly file: File | null;
  /**
   * A callback invoked when a file gets selected.
   *
   * @param file Selected file.
   */
  readonly onSelect: (file: File) => any;
  /**
   * Callback to clear the currently selected file.
   */
  readonly onClear: () => any;
}
//#endregion

export const FileContext = React.createContext<FileContextType>({
  file: null,
  onSelect: (file: File) => {},
  onClear: () => {},
});

/**
 * Component injecting `FileContext` into React component tree, wrapping
 * any `children` without modifying.
 */
const FileStore: React.FunctionComponent = props => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <FileContext.Provider
      value={{
        file,
        onSelect: (f: File) => setFile(f),
        onClear: () => setFile(null),
      }}
    >
      {props.children}
    </FileContext.Provider>
  );
};

export default FileStore;
