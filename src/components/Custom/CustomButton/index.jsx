import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  style: {
    width: '100%',
    height: '32px',
    background: theme.palette.secondary.main,
    color: theme.palette.white,
    font: theme.typography.button,
    textTransform: 'none',
    borderRadius: '4px',
    '&:hover': {
      background: theme.palette.secondary.main,
    },
    padding: '5px 9px',
    border: '1px solid transparent',
  },
  link: {
    textDecoration: 'none',
  },
}));

const CustomButton = (props) => {
  const classes = useStyles();

  return (
    <>
      <Link to={props.route} className={classes.link}>
        <Button className={classes.style}>{props.name}</Button>
      </Link>
    </>
  );
};

export default CustomButton;
