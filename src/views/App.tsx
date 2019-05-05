//#region imports
import React from 'react';
import { Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import FileStore from 'stores/FileStore';

import Header from './Header';
import Content from './Content';
//#endregion

//#region Styled
const GlobalStyles = createGlobalStyle`
  body, #root {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled(Layout)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
//#endregion

/**
 * Root application component.
 *
 * Sets up basic layout of the application rendering header and content
 * components wrapped in basic antd `Layout` component.
 *
 * The `App` component also wrapps its contents in `FileStore` component which
 * introduces `FileContext`.
 *
 * Note that the `App` component also injects global styles making sure the
 * `Layout` component fills the browser screen.
 */
const App: React.FunctionComponent = () => (
  <React.Fragment>
    <FileStore>
      <Container>
        <Header />
        <Content />
      </Container>
    </FileStore>
    <GlobalStyles />
  </React.Fragment>
);

export default App;
