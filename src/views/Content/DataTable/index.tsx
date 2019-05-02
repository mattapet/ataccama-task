//#region imports
import React from 'react';
import { File } from 'lib/types/File';
//#endregion

//#region Component interfaces
export interface Props {
  /**
   * Parsed input files.
   */
  readonly data: File;
}
//#endregion

/**
 * Root data displaying component.
 */
const DataTable: React.FunctionComponent<Props> = props => (
  <React.Fragment>
    <h2>Data Table</h2>
    <pre>{JSON.stringify(props.data, null, 2)}</pre>
  </React.Fragment>
);

export default DataTable;
