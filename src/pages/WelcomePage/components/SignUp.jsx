import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import Box from '@material-ui/core/Box'
import InputLabel from '@material-ui/core/InputLabel'
import makeStyles from '@material-ui/core/styles/makeStyles'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  label: {
    color: theme.palette.text.strong,
    marginBottom: '0.75rem'
  },
  formControl: {
    '&:not(:last-child)': {
      marginBottom: '20px'
    }
  },
  link: {
    color: theme.palette.gray['150'],
    textDecoration: 'none',
    paddingLeft: '1.5rem',
    '&:hover': {
      color: theme.palette.gray['200'],
    }
  }
}))

export default function SignUp() {
  const classes = useStyles()
  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ confirmedPassword, setConfirmedPassword ] = useState("")

  const setStateFields = {
    username: setUsername,
    email: setEmail,
    password: setPassword,
    confirmedPassword: setConfirmedPassword
  }

  function handleInputChange(e, field) {
    const value = e.target.value
    const setState = setStateFields[field]
    setState(value)
  }

  return (
    <form action="">
      <div className={classes.formControl}>
        <InputLabel className={classes.label}>
          Username
        </InputLabel>
        <Input defaultValue={username} onChange={(e) => handleInputChange(e, 'username')} placeholder="Enter your username here ..." fullWidth disableUnderline autoFocus />
      </div>
      <div className={classes.formControl}>
        <InputLabel className={classes.label}>
          Email
        </InputLabel>
        <Input defaultValue={email} onChange={(e) => handleInputChange(e, 'email')} placeholder="Enter your email here ..." fullWidth disableUnderline />
      </div>
      <div className={classes.formControl}>
        <InputLabel className={classes.label}>
          Password
        </InputLabel>
        <Input defaultValue={password} onChange={(e) => handleInputChange(e, 'password')} type="password" placeholder="Enter your password here ..." fullWidth disableUnderline />
      </div>
      <div className={classes.formControl}>
        <InputLabel className={classes.label}>
          Confirm your password
        </InputLabel>
        <Input defaultValue={confirmedPassword} onChange={(e) => handleInputChange(e, 'confirmedPassoword')} type="password" placeholder="Enter your password here ..." fullWidth disableUnderline />
      </div>
      <Box display="flex" alignItems="center">
        <Button className={classes.button} variant="contained" disableRipple color='primary'>Sign In</Button>
        <Link to={{
          pathname: '/sign-in'
        }} className={classes.link} >Already have an account? Log in</Link>
      </Box>
    </form>
  )
}