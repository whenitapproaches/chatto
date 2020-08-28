import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import RouterComponent from "./routes/RouterComponent"
const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.gray['100']
  }
}))
export default function WrapperComponent() {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <RouterComponent></RouterComponent>
    </div>
  )
}