import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppIcon from '../../../common/components/AppIcon'
import cls from 'classnames';
const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.common.white,
    width: '2rem',
    height: '2rem',
    borderRadius: 10
  },
  socialContainer: {
    borderRadius: 10,
    padding: 10,
  },
  facebook: {
    '&-icon': {
      backgroundColor: '#4267B2',
    },
    backgroundColor: '#F4F6FB',
    color: "#4267B2",
    "&:hover": {
    }
  },
  instagram: {
    '&-icon': {
      backgroundColor: '#E4405F',
    },
    backgroundColor: '#FDF2F4',
    color: "#E4405F"
  },
  link: {
    cursor: "pointer"
  }
}))

export default function UserProfileSocialMediaItem({media}) {
  const classes = useStyles()
  console.log(classes)
  let iconsByMedia = {
    facebook: 'lab la-facebook-f',
    instagram: 'lab la-instagram'
  }
  let textsByMedia = {
    facebook: 'Facebook',
    instagram: 'Instagram'
  }
  const icon = iconsByMedia[media]
  const text = textsByMedia[media]
  return (
    <Box padding={1} display="flex" justifyContent="spaceBetween" className={cls([classes.socialContainer, classes[media]])}>
      <Box display="flex" justifyContent="center" alignItems="center" className={cls([classes.icon, `${classes[media]}-icon`])}>
        <AppIcon fontSize="small" icon={icon} />
      </Box>
      <Box paddingLeft={1.5} display="flex" alignItems="center">
        <Typography>
          {text}
        </Typography>
      </Box>
      <Box className={classes.link} marginLeft="auto" display="flex" alignItems="center">
        <AppIcon icon="las la-external-link-alt" />
      </Box>
    </Box>
  )
}