//#region imports
import React from 'react';
import { Upload } from 'antd';
//#endregion

//#region Component interfaces
export interface Props {
  /**
   * A callback invoked when a file gets selected.
   *
   * @param file Selected file.
   */
  readonly onSelect: (file: File) => any;
}
//#endregion

/**
 * Presents a drag-n-drop input for JSON files.
 */
const FileInput: React.FunctionComponent<Props> = props => (
  <Upload.Dragger
    showUploadList={false}
    accept="application/json"
    customRequest={(params: { file?: File }) =>
      params.file && props.onSelect(params.file)
    }
  >
    <h3>Drop JSON File</h3>
  </Upload.Dragger>
);

export default FileInput;
