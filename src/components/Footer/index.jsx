import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => {
  footer: {
  }
});

const footerList = [
  {
    id: 1,
    name: 'about',
  },
  {
    id: 2,
    name: 'Blog',
  },
  {
    id: 3,
    name: 'Jobs',
  },
  {
    id: 4,
    name: 'Help',
  },
  {
    id: 5,
    name: 'API',
  },
  {
    id: 6,
    name: 'Privacy',
  },
  {
    id: 7,
    name: 'Terms',
  },
  {
    id: 8,
    name: 'Top Accounts',
  },
  {
    id: 9,
    name: 'Hashtags',
  },
  {
    id: 10,
    name: 'Locations',
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <div>
      {footerList.map((item) => {
        return (
          <div key={item.id}>
            <Typography>{item.name}</Typography>
          </div>
        );
      })}
      <div>
        <div>English</div>
        <div>
          <Typography>
            {'© Copyright  '}
            {new Date().getFullYear()}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
