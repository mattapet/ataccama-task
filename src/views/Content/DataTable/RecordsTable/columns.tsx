//#region imports
import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { Record } from 'lib/types/File';
//#endregion

/**
 * Creates a column definition for given properties.
 *
 * Note that the function appends an `Action` column.
 *
 * @param properties An array of names of record properties
 * @param onRemove Handler invokation of which is supposed to remove record at
 * given index.
 * @returns A list of columns describing properties, if non-empty array of
 * `properties` is passed, otherwise an empty array.
 */
function columns(
  properties: string[],
  onRemove: (index: number) => any
): ColumnProps<Record>[] {
  if (!properties.length) {
    // If no properties are specified, return empty array to avoid having
    // a single (Action) column rendered.
    return [];
  }

  return [
    // Add columns for all common properties of records
    ...properties.map(property => ({
      dataIndex: `data.${property}`,
      title: property,
    })),
    // Append an `Actions` column with `Remove` button
    {
      title: 'Actions',
      render: (_, __, index) => (
        // eslint-disable-next-line
        <a href="javascript:;" onClick={() => onRemove(index)}>
          Remove
        </a>
      ),
    },
  ];
}

export default columns;
