import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/core/styles/makeStyles'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import AppSearchInput from './AppSearchInput'
const useStyles = makeStyles(theme => ({
  navigationBar: {
    height: 80,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: theme.palette.background
  }
}))

export default function TheNavigationBar() {
  const classes = useStyles()
  return (
    <Box display="flex" alignItems="center" className={classes.navigationBar}>
      <Container>
        <Grid display="flex" alignItems="center" spacing={5} container>
          <Grid xs={1} item>
            <Link to={{pathname: '/home'}}>
              <Logo />
            </Link>
          </Grid>
          <Grid xs={4} item>
            <AppSearchInput fullWidth placeholder="Search for anything ..." />
          </Grid>
          <Grid xs={5} item>

          </Grid>
          <Grid xs={2} item>
            Hello
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}