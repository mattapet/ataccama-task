//#region imports
import React from 'react';
import renderer from 'react-test-renderer';

import KidsTable from '../KidsTable';
import { Kids } from 'lib/types/File';
//#endregion

it('should render correctly', () => {
  // Arrange
  const kids1: Kids = {};
  const kids2: Kids = {
    test: {
      records: [
        {
          _id: 'f',
          data: { a: '2', c: '4' },
          kids: {},
        },
      ],
    },
  };

  // Act
  const component1 = renderer.create(<KidsTable data={kids1} />);
  const component2 = renderer.create(<KidsTable data={kids2} />);

  // Assert
  expect(component1).toMatchSnapshot();
  expect(component2).toMatchSnapshot();
});
