//#region imports
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import { FileContext } from 'stores/FileStore';

import FileStatus from './FileStatus';
//#endregion

//#region Styled
const LayoutHeader = styled(Layout.Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: whitesmoke;
  font-family: 'Courier New', Courier, monospace;
`;
//#endregion

/**
 * Global application header.
 *
 * Component displays title of the application as well as file status based
 * on `FileContext`.
 */
const Header: React.FunctionComponent = () => {
  const { file, onClear } = useContext(FileContext);
  return (
    <LayoutHeader>
      <Title>ataccama-task</Title>
      <FileStatus file={file} onClear={onClear} />
    </LayoutHeader>
  );
};

export default Header;
