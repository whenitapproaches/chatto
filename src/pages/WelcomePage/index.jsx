import React from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import WelcomeImage from './components/WelcomeImage'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Logo from '../../common/components/Logo'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Route, Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 1200,
    [theme.breakpoints.up("sm")]: {
      height: '100vh',
    },
    alignItems: 'center',
    display: 'flex',
  },
  box: {
    width: '100%',
    backgroundColor: theme.palette.background,
    borderRadius: 15,
    overflow: 'hidden',
    padding: '40px 50px'
  },
  gridOverlap: {
    position: 'relative',
    zIndex: 5
  },
  logo: {
    marginBottom: 20
  },
}))

export default function WelcomePage() {
  const classes = useStyles()
  return (
    <Container maxWidth={false} className={classes.container}>
      <Box className={classes.box}>
        <Grid spacing={0} container>
          <Grid sm={6} xs={12} item className={classes.gridOverlap}>
            <Link to={{pathname: '/home'}}>
              <Logo className={classes.logo} />
            </Link>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </Grid>
          <Grid sm={6} xs={12} item>
            <WelcomeImage />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}