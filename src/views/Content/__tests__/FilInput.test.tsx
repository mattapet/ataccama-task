//#region imports
import React from 'react';
import renderer from 'react-test-renderer';

import FileInput from '../FileInput';
//#endregion

it('should render correctly', () => {
  // Arrange
  // Act
  const component1 = renderer.create(<FileInput onSelect={() => {}} />);
  const component2 = renderer.create(<FileInput onSelect={() => {}} />);

  // Assert
  expect(component1).toMatchSnapshot();
  expect(component2).toMatchSnapshot();
});
