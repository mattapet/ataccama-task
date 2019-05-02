//#region imports
import React, { useContext, useEffect } from 'react';
import { message, Layout } from 'antd';
import { FileContext } from 'stores/FileStore';
import useFileParser from 'hooks/useFileParser';
import DataTable from './DataTable';
import FileInput from './FileInput';
//#endregion

/**
 * Root content component.
 *
 * Renders main content of the application:
 * - `DataTable` - when a file with in valid format selected
 * - `FileInput` - no file, or format in invalid format selected
 *
 * The component uses `FileContext` to maintain track of the currently selected
 * files.
 */
const Content: React.FunctionComponent = () => {
  const { file, onSelect } = useContext(FileContext);
  const { data, error } = useFileParser(file);

  useEffect(() => {
    // Present an error message if an error encountered.
    error && message.error(error.message);
  }, [error]);

  return (
    <Layout.Content>
      {file && data ? (
        <DataTable data={data} />
      ) : (
        <FileInput onSelect={onSelect} />
      )}
    </Layout.Content>
  );
};

export default Content;
