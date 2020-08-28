import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import UserProfile from './components/UserProfile'
import UserNotification from './components/UserNotifications'
import UserFriendsList from './components/UserFriendsList'
import TheNavigationBar from '../../common/components/TheNavigationBar'
import UserChat from './components/UserChat'

export default function ProfilePage() {
  return (
      <Box paddingTop={10}>
        <TheNavigationBar />
        <Container maxWidth={false}>
          <Grid container spacing={5}>
            <Grid sm={8} item>
              <Grid container spacing={5}>
                <Grid sm={12} item>
                  <UserProfile />
                </Grid>
                <Grid sm={12} item>
                  <UserFriendsList />
                </Grid>
              </Grid>
            </Grid>
            <Grid sm={4} item>
              <Grid container spacing={5}>
                <Grid sm={12} item>
                  <UserNotification />
                </Grid>
                <Grid sm={12} item>
                  <UserChat />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
  )
}