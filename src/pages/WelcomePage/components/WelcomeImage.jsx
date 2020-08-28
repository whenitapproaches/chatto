import React from 'react'
import AssetWelcomeImage from './WelcomeImage.png'
import AssetWelcomeImageBlob from './WelcomeImageBlob.png'
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  container: {
    position: 'relative'
  },
  image: {
    position: 'relative',
    zIndex: 1,
    margin: 'auto',
    display: 'block',
  },
  blob: {
    position: 'absolute',
    zIndex: 0,
    top: '50%',
    left: '48%',
    transform: ['translateX(-50%)', 'translateY(-50%)'].join(" ")
  },
  text: {
    zIndex: 2,
    position: 'relative',
    marginTop: '-30px',
    '& > h5': {
      fontWeight: 'bold'
    }
  }
})

export default function WelcomeImage() {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <img className={classes.image} src={AssetWelcomeImage} alt="Welcome" />
      <img className={classes.blob} src={AssetWelcomeImageBlob} alt="Welcome" />
      <div className={classes.text}>
        <Typography variant="h5" align="right">Let’s become a Chatto and party together!</Typography>
        <Typography variant="h6" align="right">Make us your first place for chatting and sharing</Typography>
      </div>
    </div>
  )
}