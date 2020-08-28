import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import AppIcon from './AppIcon'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  icon: {
    position: 'absolute',
    left: '20px',
    color: theme.palette.gray['150']
  },
  input: {
    '& > input': {
      paddingLeft: 50

    }
  }
}))

export default function AppSearchInput(props) {
  const classes = useStyles()
  return (
    <Input
      className={classes.input}
      startAdornment={
        <AppIcon fontSize="small" className={classes.icon} icon="las la-search" />
      }
      disableUnderline
      {...props}
    />
  )
}