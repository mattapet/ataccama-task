//#region imports
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import RecordsTable from '../RecordsTable';
import { Record } from 'lib/types/File';
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

it('should render table with no columns, when no records provided', () => {
  // Arrange
  const records: Record[] = [];

  // Act
  act(() => {
    ReactDOM.render(<RecordsTable records={records} />, container);
  });

  // Assert
  const thead = container && container.querySelector('thead');
  expect(thead && thead.childNodes.length).toEqual(0);
});

it('should render table with right columns', () => {
  // Arrange
  const records: Record[] = [
    {
      _id: 't',
      data: { a: '2', b: '4' },
      kids: {},
    },
  ];

  // Act
  act(() => {
    ReactDOM.render(<RecordsTable records={records} />, container);
  });

  // Assert
  const thead = container && container.querySelector('thead');
  const tr = thead && thead.querySelector('tr');
  expect(tr && tr.childNodes.length).toEqual(4);
});

it('should render table with right columns', () => {
  // Arrange
  const records: Record[] = [
    {
      _id: 't',
      data: { a: '2', b: '4' },
      kids: {},
    },
    {
      _id: 'f',
      data: { a: '2', c: '4' },
      kids: {},
    },
  ];

  // Act
  act(() => {
    ReactDOM.render(<RecordsTable records={records} />, container);
  });

  // Assert
  const thead = container && container.querySelector('thead');
  const tr = thead && thead.querySelector('tr');
  expect(tr && tr.childNodes.length).toEqual(5);

  const tbody = container && container.querySelector('tbody');
  expect(tbody && tbody.childNodes.length).toEqual(records.length);
});

it('should remove record when `remove` button clicked', () => {
  // Arrange
  const records: Record[] = [
    {
      _id: 't',
      data: { a: '2', b: '4' },
      kids: {},
    },
    {
      _id: 'f',
      data: { a: '2', c: '4' },
      kids: {},
    },
  ];
  act(() => {
    ReactDOM.render(<RecordsTable records={records} />, container);
  });

  // Act
  const a = container && container.querySelector('a');
  act(() => {
    a && a.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // Assert
  const tbody = container && container.querySelector('tbody');
  expect(tbody && tbody.childNodes.length).toEqual(records.length - 1);
});

it('should expand to kids table', () => {
  // Arrange
  const records: Record[] = [
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
  act(() => {
    ReactDOM.render(<RecordsTable records={records} />, container);
  });

  // Act
  const tbody0 = container && container.querySelector('tbody');
  const i = tbody0 && tbody0.querySelector('i');
  act(() => {
    i && i.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // Assert
  const h3 = tbody0 && tbody0.querySelector('h3');
  const tbody1 = tbody0 && tbody0.querySelector('tbody');
  expect(h3 && h3.textContent).toEqual('test');
  expect(tbody1).toBeTruthy();
});
