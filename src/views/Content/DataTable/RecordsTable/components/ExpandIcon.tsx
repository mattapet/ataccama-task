//#region imports
import React from 'react';
import { Icon } from 'antd';
import { Record } from 'lib/types/File';
import { ExpandIconProps } from 'antd/lib/table';
//#endregion

//#region Component interfaces
export interface Props extends ExpandIconProps<Record> {}
//#endregion

/**
 * Custom `ExpandIcon` component, that renders a arrow-styled icon, if a given
 * record has any kids, `null` otherwise.
 */
const ExpandIcon: React.FunctionComponent<Props> = props => {
  const kidsCount = Object.keys(props.record.kids).length;
  const onExpand = (e: React.MouseEvent) =>
    // Delegate native click event to caller passing wrapped record
    props.onExpand(props.record, e.nativeEvent);

  if (!kidsCount) {
    // Since there are no kids, there's nothing to expand
    return null;
  }
  // Choose correct orientation of the icon
  const arrowType = props.expanded ? 'down' : 'right';
  return <Icon type={arrowType} onClick={onExpand} />;
};

export default ExpandIcon;
