import React from 'react';
import Icon from '@material-ui/core/Icon';

export default function AppIcon({icon, ...restProps}) {
  return (
    <Icon {...restProps}>
      <i className={icon}></i>
    </Icon>
  )
}