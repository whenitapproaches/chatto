import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  imageContainer: {
    paddingTop: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10
  },
  image: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      'translateX(-50%)',
      'translateY(-50%)'
    ].join(" ")
  }
}))

export default function UserProfileAvatar(props) {
  const classes = useStyles()

  return (
    <Box>
      <Box marginBottom={2.5} className={classes.imageContainer}>
        <img className={classes.image} src="" alt="Avatar" />
      </Box>
      <Box>
        <Button fullWidth variant="outlined">View profile photo</Button>
      </Box>
    </Box>
  )
}