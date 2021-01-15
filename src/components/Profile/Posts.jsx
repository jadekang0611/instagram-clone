import React from 'react';
import { Grid } from '@material-ui/core';
import Post1 from './post1.png';
import Post2 from './post2.png';
import Post3 from './post3.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    cursor: 'pointer',
  },
}));

const postList = [
  Post1,
  Post2,
  Post3,
  Post1,
  Post2,
  Post3,
  Post1,
  Post2,
  Post3,
];

const Posts = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      spacing={2}
      className={classes.postGrid}
    >
      {postList.map((item, id) => {
        return (
          <Grid key={id} item xs={4}>
            <img src={item} alt={Math.random()} className={classes.image} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
