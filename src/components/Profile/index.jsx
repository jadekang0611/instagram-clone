import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import clsx from 'clsx';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Posts from './Posts';
import Portrait from './portrait.png';
import API from '../../api';
import * as ROUTES from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: theme.spacing(4, 20),
    background: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 0),
    },
  },
  profileCard: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 1),
    },
  },
  col1: {
    display: 'flex',
    justifyContent: 'center',
  },
  profilePhoto: {
    width: '150px',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '77px',
      height: '77px',
    },
  },
  col2: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2),
    },
  },
  edit: {
    display: 'block',
    padding: '5px 9px',
    background: 'transparent',
    border: '1px solid #dbdbdb',
    borderRadius: '4px',
    fontSize: '10px',
    fontWeight: 600,
    marginLeft: '20px',
    cursor: 'pointer',
    '&:focus': {
      border: '1px solid #dbdbdb',
      outline: 0,
    },
    '&:active': {
      border: '1px solid #dbdbdb',
      outline: 0,
      color: '#9b9b9b',
    },
  },
  userNameSection: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  userName: {
    fontWeight: 300,
    fontSize: '20px',
    lineHeight: '32px',
  },
  icon: {
    marginLeft: '20px',
    fontSize: '20px',
    cursor: 'pointer',
  },
  row1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    listStyle: 'none',
    padding: 0,
  },
  activitySection: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginRight: '40px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  number: {
    fontWeight: 600,
    color: '#262626',
  },
  email: {
    fontWeight: 500,
    display: 'inline',
  },
  line: {
    borderBottom: '1px solid #dbdbdb',
    height: '1px',
    margin: '40px 0px 52px 0',
  },
  spacing: {
    paddingTop: '40px',
  },
}));

const Profile = (props) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  document.title = `Instagram | ${name}`;
  const history = useHistory();
  useEffect(() => {
    if (typeof props.location.state === 'undefined') {
      history.push(ROUTES.LANDING);
    } else {
      setName(props.location.state.name);
      setEmail(props.location.state.email);
    }
    (async () => {
      const res = await API.get('profile');
      if (!res.data.loggedin) {
        history.push(ROUTES.LANDING);
      }
    })();
  }, []);

  return (
    <div className={classes.profileContainer}>
      <Navbar />
      <div className={classes.main}>
        <Grid container className={classes.profileCard}>
          <Grid item md={4} className={classes.col1}>
            <img
              src={Portrait}
              alt="Profile"
              className={classes.profilePhoto}
            />
          </Grid>
          <Grid item md={8} className={classes.col2}>
            <div className={classes.row1}>
              <Typography
                className={clsx(classes.userNameSection, classes.userName)}
              >
                {name}
              </Typography>
              <button className={classes.edit}>Edit Profile</button>
              <SettingsOutlinedIcon className={classes.icon} />
            </div>
            <ul className={classes.row2}>
              <li>
                <Typography
                  className={clsx(classes.activitySection, classes.activity)}
                >
                  <span className={classes.number}>500</span> posts
                </Typography>
              </li>
              <li>
                <Typography
                  className={clsx(classes.activitySection, classes.activity)}
                >
                  <span className={classes.number}>2.5k</span> followers
                </Typography>
              </li>
              <li>
                <Typography
                  className={clsx(classes.activitySection, classes.activity)}
                >
                  <span className={classes.number}>500</span> following
                </Typography>
              </li>
            </ul>
            <div className={classes.row2}>
              <Typography className={classes.email}>{email}</Typography>
            </div>
          </Grid>
        </Grid>
        <div className={classes.line} />
        <Posts />
        <div className={classes.spacing} />
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
