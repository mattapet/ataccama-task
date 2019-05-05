//#region imports
import React, { useState } from 'react';
import { Record } from 'lib/types/File';
import View from './view';
//#endregion

//#region Component interfaces
export interface Props {
  /**
   * Title of the table -- used when nested table as name of the child table.
   */
  readonly title?: string;
  /**
   * List of records to display.
   */
  readonly records: Record[];
}
//#endregion

/**
 * Renders given `records` as a table with variable number of columns.
 *
 * The table contains columns, that are derived from the `records` passed to
 * the component as set of all properties of all of the records. For example
 * consider two records, one with properties `a, b, c` and the other with
 * properties `b, c, x`. The table rendered will would have columns `a, b, c`
 * and `x`.
 *
 * The `RecordsTable` is a statefull keeping track of records, which can be
 * removed.
 */
const RecordsTable: React.FunctionComponent<Props> = props => {
  // List of currently rendered items -- derived from given props
  const [records, setRecords] = useState(props.records);

  // Handler removing a record at specified `index`
  const onRemove = (index: number) => {
    const updatedRecords = records.filter((_, idx) => idx !== index);
    setRecords(updatedRecords);
  };

  return <View title={props.title} records={records} onRemove={onRemove} />;
};

export default RecordsTable;
