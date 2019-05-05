//#region imports
import React from 'react';
import { Record } from 'lib/types/File';
import { Table } from 'antd';
import columns from './columns';
import ExpandIcon from './components/ExpandIcon';
import KidsTable from '../KidsTable';
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
  /**
   * Remove handler.
   *
   * @param index Index of the item that should be removed.
   */
  readonly onRemove: (index: number) => any;
}
//#endregion

const View: React.FunctionComponent<Props> = props => {
  const properties: Set<string> = props.records.reduce(
    (partial, next) => new Set([...partial, ...Object.keys(next.data)]),
    new Set()
  );

  return (
    <Table<Record>
      title={() => props.title && <h3>{props.title}</h3>}
      columns={columns([...properties], props.onRemove)}
      size="middle"
      dataSource={props.records}
      rowKey={record => record._id}
      expandIcon={ExpandIcon}
      expandedRowRender={record => <KidsTable data={record.kids} />}
      pagination={false}
    />
  );
};

export default View;
