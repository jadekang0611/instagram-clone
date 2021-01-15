import React, { useState } from 'react';
import { Grid, Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import SearchIcon from '@material-ui/icons/Search';
import * as ROUTES from '../../constants/routes';
import { useHistory } from 'react-router-dom';
import API from '../../api';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: '5px solid #dbdbdb',
    background: theme.palette.white,
    alignItems: 'center',
    padding: theme.spacing(1, 20),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2),
      justifyContent: 'space-between',
    },
  },
  top: {
    width: '975px',
  },
  searchBar: {
    position: 'relative',
    border: '1px solid #999999',
    borderRadius: '3px',
    backgroundColor: '#fafafa',
    marginLeft: 0,
    width: '200px',
    minWidth: '125px',
    height: '28px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  searchIconBox: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    fontSize: '14px',
    color: '#afb1b4',
  },
  inputRoot: {
    fontSize: '12px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  appIcon: {
    fontSize: '22px',
    color: '#262626',
    margin: '0 4px',
    cursor: 'pointer',
    '&:active': {
      color: '#dbdbdb',
    },
  },
  name: {
    fontSize: '26px',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();

  const [error, setError] = useState('');

  const logoutHandler = (e) => {
    e.preventDefault();
    setError('');

    (async () => {
      try {
        await API.get('logout');
        setTimeout(() => {
          history.push({
            pathname: ROUTES.SIGNIN,
          });
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    })();
  };

  return (
    <Grid container className={classes.appBar} justify="center" spacing={1}>
      <Grid sm={4} item>
        <Typography variant="h1" className={classes.name}>
          Instagram
        </Typography>
      </Grid>
      <Grid sm={4} item>
        <div className={classes.searchBar}>
          <div className={classes.searchIconBox}>
            <SearchIcon className={classes.searchIcon} />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Grid>
      <Grid sm={4} item>
        <div className={classes.icons}>
          <HomeOutlinedIcon className={classes.appIcon} />
          <NearMeOutlinedIcon className={classes.appIcon} />
          <FavoriteBorderOutlinedIcon className={classes.appIcon} />
          <ExploreOutlinedIcon className={classes.appIcon} />
          <ExitToAppOutlinedIcon
            className={classes.appIcon}
            onClick={logoutHandler}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default Navbar;
