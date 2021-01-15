import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    maxWidth: '350px',
    borderRadius: '1px',
    border: '1px solid #dbdbdb',
    margin: '0 0 10px',
    backgroundColor: theme.palette.white,
    padding: '10px 0',
  },
  question: {
    margin: '15px',
    textAlign: 'center',
  },
  action: {
    color: '#1799f7',
    fontWeight: 500,
  },
  link: {
    textDecoration: 'none',
  },
}));

const Redirect = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="body1" className={classes.question}>
        {props.message}{' '}
        <Link to={props.route} className={classes.link}>
          <span className={classes.action}>{props.action}</span>
        </Link>
      </Typography>
    </div>
  );
};

export default Redirect;
