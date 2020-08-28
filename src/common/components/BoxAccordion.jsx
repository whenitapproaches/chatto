import React, {useState} from 'react'
import Accordion from '@material-ui/core/Accordion'
import Box from '@material-ui/core/Box'
import AppIcon from './AppIcon';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails'
import makeStyles from '@material-ui/core/styles/makeStyles'
import cls from 'classnames';

const useStyles = makeStyles(theme => ({
  accordion: {

  },
  title: {
    fontWeight: "bold",
    color: theme.palette.text.strong
  },
  icon: {
    transform: 'rotateZ(0deg)',
    transition: 'all .3s ease',
    cursor: 'pointer',
    color: theme.palette.gray['200'],
    '&.is-active': {
      transform: 'rotateZ(180deg)'
    },
    '&:hover': {
      color: theme.palette.text.normal
    },
  },
  box: {
    borderRadius: 15,
    backgroundColor: theme.palette.background,
    width: '100%',
    padding: 30
  }
}))

export default function BoxAccordion({title, children, ...restProps}) {
  const classes = useStyles()
  const [ isActive, setIsActive ] = useState(true)
  
  function handleAccordionToggler() {
    const status = !isActive
    setIsActive(status)
  }

  return (
    <Accordion expanded={isActive} className={classes.accordion} {...restProps}>
      <Box marginBottom={2.5} display="flex" alignItems="center" justifyContent="space-between">
        <Typography className={classes.title} variant="h5">{title}</Typography>
        <AppIcon icon="las la-chevron-circle-down" className={cls({[classes.icon]: true, 'is-active': isActive})} onClick={handleAccordionToggler}/>
      </Box>
      <AccordionDetails>
        <Box className={classes.box}>{children}</Box>
      </AccordionDetails>
    </Accordion>
  )
}