import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(80),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
      },
    },
    paper: {
      overflow: 'auto',
      maxHeight: theme.spacing(50),
    },
  })
);

export default function Card({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper square elevation={5} className={classes.paper}>
        {children}
      </Paper>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};
