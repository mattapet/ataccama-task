//#region imports
import React from 'react';
import { File } from 'lib/types/File';
import RecordsTable from './RecordsTable';
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
    <RecordsTable records={props.data} />
  </React.Fragment>
);

export default DataTable;
