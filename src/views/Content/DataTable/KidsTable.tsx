//#region imports
import React from 'react';
import { Kids } from 'lib/types/File';
import RecordsTable from './RecordsTable';
//#endregion

//#region Component interfaces
export interface Props {
  /**
   * Kids to render.
   */
  readonly data: Kids;
}
//#endregion

/**
 * Component that renders a `RecordTable` for each of the kids.
 */
const KidsTable: React.FunctionComponent<Props> = props => (
  <React.Fragment>
    {Object.keys(props.data).map(subtable => (
      <RecordsTable
        key={subtable}
        title={subtable}
        records={props.data[subtable].records}
      />
    ))}
  </React.Fragment>
);

export default KidsTable;
