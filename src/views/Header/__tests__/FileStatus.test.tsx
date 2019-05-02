//#region imports
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import FileStatus from '../FileStatus';
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

it('should display "No File Selected" when passed `null` file', () => {
  // Arrange

  // Act
  act(() => {
    ReactDOM.render(<FileStatus file={null} onClear={() => {}} />, container);
  });

  // Assert
  const em = container && container.querySelector('em');
  expect(em && em.textContent).toEqual('No File Selected');
});

it('should display name of the passed non-`null` file', async () => {
  // Arrage
  const fileName = 'TEST_FILE_NAME.json';

  // Act
  act(() => {
    ReactDOM.render(
      <FileStatus file={new File([], fileName)} onClear={() => {}} />,
      container
    );
  });

  // Assert
  const span = container && container.querySelector('span');
  expect(span && span.textContent).toEqual(fileName);
});

it('should invoke clear callback on click', async () => {
  // Arrange
  const fileName = 'TEST_FILE_NAME.json';
  const onClear = () => (cleared = true);
  let cleared = false;
  act(() => {
    ReactDOM.render(
      <FileStatus file={new File([], fileName)} onClear={onClear} />,
      container
    );
  });

  // Act
  const button = container && container.querySelector('button');
  act(() => {
    button && button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // Assert
  expect(cleared).toBeTruthy();
});
