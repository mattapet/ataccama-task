//#region imports
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
//#endregion

//#region Component interfaces
export interface Props {
  /**
   * Currently selected file. If no file is selected, the value is supposed
   * to be `null`.
   */
  readonly file: File | null;
  /**
   * Callback to clear the currently selected file.
   */
  readonly onClear: () => any;
}
//#endregion

//#region Styled
const Wrapper = styled.div`
  color: whitesmoke;
  * {
    color: whitesmoke;
    margin-right: 0.25em;
    margin-left: 0.25em;
  }
`;
//#endregion

/**
 * Displays currently selected file with an option to clear the selection.
 */
const FileStatus: React.FunctionComponent<Props> = props => (
  <Wrapper>
    <span>{props.file ? props.file.name : <em>No File Selected</em>}</span>
    <Button type="ghost" shape="round" onClick={props.onClear}>
      Clear
    </Button>
  </Wrapper>
);

export default FileStatus;
