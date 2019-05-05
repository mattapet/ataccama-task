//#region imports
import React from 'react';
import renderer from 'react-test-renderer';

import DataTable from '../DataTable';
import { Record } from 'lib/types/File';
//#endregion

it('should render correctly', () => {
  // Arrange
  const records1: Record[] = [
    {
      _id: 't',
      data: { a: '2', b: '4' },
      kids: {},
    },
  ];
  const records2: Record[] = [
    {
      _id: 't',
      data: { a: '2', b: '4' },
      kids: {
        test: {
          records: [
            {
              _id: 'f',
              data: { a: '2', c: '4' },
              kids: {},
            },
          ],
        },
      },
    },
  ];

  // Act
  const component1 = renderer.create(<DataTable data={records1} />);
  const component2 = renderer.create(<DataTable data={records2} />);

  // Assert
  expect(component1).toMatchSnapshot();
  expect(component2).toMatchSnapshot();
});
