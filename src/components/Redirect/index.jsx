import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '350px',
    border: '1px solid #dbdbdb',
    margin: '0 auto',
    backgroundColor: theme.palette.white,
    padding: '10px 0',
  },
  question: {
    margin: '15px',
    textAlign: 'center',
  },
  action: {
    color: '#1799f7',
    fontWeight: 400,
  },
}));

const Redirect = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="body1" className={classes.question}>
        {props.message} <span className={classes.action}>{props.action}</span>
      </Typography>
    </div>
  );
};

export default Redirect;
