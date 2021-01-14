import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  landing: {
    margin: '32px auto 0',
    maxWidth: '935px',
    paddingBottom: '32px',
    width: '100%',
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.landing}>
      <Grid item sm={0} md={6}>
        Phones are coming here
      </Grid>
      <Grid item md={6}>
        LogIn
      </Grid>
    </Grid>
  );
};

export default Landing;
