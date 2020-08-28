import React from 'react'
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input'
import NativeSelect from '@material-ui/core/NativeSelect'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import makeStyles from '@material-ui/core/styles/makeStyles'
import AppIcon from '../../../common/components/AppIcon'

const useStyles = makeStyles(theme => ({
  label: {
    color: theme.palette.gray['200'],
    marginBottom: '0.75rem',
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
  },
  select: {
    '&&& > select': {
      paddingRight: 40

    }
  }
}))

const useStylesArrowDownIcon = makeStyles(theme => ({
  icon: {
    position: 'absolute',
    right: '20px',
    pointerEvents: 'none'
  }
}))

function ArrowDownIcon() {
  const classes = useStylesArrowDownIcon()
  return (
    <AppIcon className={classes.icon} fontSize="small" icon="las la-angle-down" />
  )
}

export default function UserProfileInfo() {
  const classes = useStyles()
  return (
    <Box>
      <Box marginBottom={2.5}>
        <InputLabel className={classes.label}>Display name</InputLabel>
        <Input defaultValue={`Test`} fullWidth type="text" disableUnderline />
      </Box>
      <Box marginBottom={2.5}>
        <InputLabel className={classes.label}>Gender</InputLabel>
        <NativeSelect
          className={classes.select}
          disableUnderline
          IconComponent={props => <ArrowDownIcon {...props} />}
        >
          <option value="Hidden">Hidden</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </NativeSelect>
      </Box>
      <Box marginBottom={2.5}>
        <InputLabel className={classes.label}>Date of Birth</InputLabel>
        <Input defaultValue={`Test`} fullWidth type="text" disableUnderline />
      </Box>
      <Box marginBottom={2.5}>
        <InputLabel className={classes.label}>Description</InputLabel>
        <Input defaultValue={`Test`} fullWidth type="text" disableUnderline multiline rowsMax={5} />
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </Box>
    </Box>
  )
}