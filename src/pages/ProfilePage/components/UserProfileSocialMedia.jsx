import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import UserProfileSocialMediaItem from './UserProfileSocialMediaItem'
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({

}))

export default function UserProfileSocialMedia(props) {
  const classes = useStyles()

  return (
    <Box>
      <Box marginBottom={2.5}>
        <Typography>Social media</Typography>
      </Box>
      <Box marginBottom={2.5}>
        <UserProfileSocialMediaItem media="facebook" />
      </Box>
      <Box>
        <UserProfileSocialMediaItem media="instagram" />
      </Box>
    </Box>
  )
}