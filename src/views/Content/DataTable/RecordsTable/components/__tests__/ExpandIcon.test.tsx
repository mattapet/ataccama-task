//#region imports
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import ExpandIcon from '../ExpandIcon';
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

it('should render `null` on Record having no kids', () => {
  // Arrange
  const record: Record = { _id: '1', data: {}, kids: {} };

  // Act
  act(() => {
    ReactDOM.render(
      <ExpandIcon
        prefixCls=""
        expanded={false}
        needIndentSpaced={false}
        expandable={false}
        onExpand={() => {}}
        record={record}
      />,
      container
    );
  });

  // Assert
  expect(container && container.childNodes.length).toEqual(0);
});

it('should render right arrow on row exapnded being `false`', () => {
  // Arrange
  const record: Record = {
    _id: '1',
    data: {},
    kids: { test: { records: [] } },
  };

  // Act
  act(() => {
    ReactDOM.render(
      <ExpandIcon
        prefixCls=""
        expanded={false}
        needIndentSpaced={false}
        expandable={false}
        onExpand={() => {}}
        record={record}
      />,
      container
    );
  });

  // Assert
  const i = container && container.querySelector('i');
  const label = i && i.getAttribute('aria-label');
  expect(label).toEqual('icon: right');
});

it('should render right down on row exapnded being `true`', () => {
  // Arrange
  const record: Record = {
    _id: '1',
    data: {},
    kids: { test: { records: [] } },
  };

  // Act
  act(() => {
    ReactDOM.render(
      <ExpandIcon
        prefixCls=""
        expanded={true}
        needIndentSpaced={false}
        expandable={false}
        onExpand={() => {}}
        record={record}
      />,
      container
    );
  });

  // Assert
  const i = container && container.querySelector('i');
  const label = i && i.getAttribute('aria-label');
  expect(label).toEqual('icon: down');
});

it('should delegate onClick events passing given record', () => {
  // Arrange
  const record: Record = {
    _id: '1',
    data: {},
    kids: { test: { records: [] } },
  };
  const onExpand = (r: Record, e: MouseEvent) => {
    clicked = true;
    passed = r;
  };
  let passed: Record | null = null;
  let clicked = false;
  act(() => {
    ReactDOM.render(
      <ExpandIcon
        prefixCls=""
        expanded={true}
        needIndentSpaced={false}
        expandable={false}
        onExpand={onExpand}
        record={record}
      />,
      container
    );
  });

  // Act
  const i = container && container.querySelector('i');
  act(() => {
    i && i.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  // Assert
  expect(clicked).toBeTruthy();
  expect(passed).toEqual(record);
});
