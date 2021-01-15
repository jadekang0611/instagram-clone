import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignIn from '../SignIn';
import DeviceImg from './instagramDevice.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '32px auto 0',
    paddingBottom: '32px',
    maxWidth: '935px',
    width: '100%',
  },
  deviceBox2: {
    height: '668px',
    position: 'relative',
    alignSelf: 'center',
    marginLeft: '-35px',
    marginRight: '-15px',
    [theme.breakpoints.between('xs', 'md')]: {
      display: 'none',
    },
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '350px',
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div item className={classes.deviceBox}>
        <img
          src={DeviceImg}
          alt="Device Mockups"
          className={classes.deviceBox2}
        />
      </div>
      <div item className={classes.mainContainer}>
        <SignIn />
      </div>
    </div>
  );
};

export default Landing;
