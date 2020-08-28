import React, { useState } from 'react'
import AssetLogo from '../Chatto.png'
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
    height: 'auto'

  }
}))

export default function Logo(props) {
  const classes = useStyles()
  return (
    <img className={classes.img} src={AssetLogo} alt="Logo" {...props} ></img>
  )
}