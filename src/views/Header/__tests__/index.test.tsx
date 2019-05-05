//#region imports
import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';
//#endregion

let container: HTMLDivElement | null = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  container && document.body.removeChild(container);
  container = null;
});

it('renders correctly', () => {
  // Arrange
  // Act
  const component = renderer.create(<Header />);
  // Assert
  expect(component).toMatchSnapshot();
});
