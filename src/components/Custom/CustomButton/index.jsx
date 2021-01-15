import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
  disabledButton: {
    backgroundColor: '#bbe0fc',
    color: '#FFFFFF',
  },
  label: {
    color: theme.palette.white,
  },
}));

const CustomButton = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.link}>
      <Button
        className={classes.style}
        onClick={props.submitHandler}
        classes={{ disabled: classes.disabledButton, label: classes.label }}
        disabled={props.disabled}
        startIcon={props.startIcon}
      >
        {props.name}
      </Button>
    </div>
  );
};

export default CustomButton;
