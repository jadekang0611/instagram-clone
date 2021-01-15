import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: '52px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  list: {
    display: 'block',
  },
  footerList1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  footerList2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  list2: {
    margin: '12px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  itemBox: {
    margin: '8px 0px 0px 8px',
    display: 'block',
  },
  itemBox2: {
    margin: '8px 0px 0px 8px',
  },
  item: {
    color: '#8e8e8e',
    display: 'block',
    fontWeight: 500,
    textTransform: 'capitalize',
    '&visited': {
      color: '#8e8e8e',
      textTransform: 'capitalize',
      textDecoration: 'none',
    },
  },
  copyright: {
    marginLeft: '16px',
  },
  dropdownBox: {},
  dropdown: {
    cursor: 'pointer',
    height: '100%',
    left: 0,
    opacity: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
}));

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

const footerList2 = [
  {
    id: 11,
    name: 'Beauty',
  },
  {
    id: 12,
    name: 'Dance & Performance',
  },
  {
    id: 13,
    name: 'Fitness',
  },
  {
    id: 14,
    name: 'Food & Drink',
  },
  {
    id: 15,
    name: 'Home & Garden',
  },
  {
    id: 16,
    name: 'Music',
  },
  {
    id: 17,
    name: 'Visual Arts',
  },
];

const languages = [
  'Afrikaans',
  'Chinese',
  'Czech',
  'Danish',
  'Dutch',
  'English',
  'English (UK)',
  'Suomi',
  'Français',
  'Deutsch',
  'Ελληνικά',
  'Bahasa',
  'Italiano',
  '日本語',
  '한국어',
  'Bahasa',
  'Norsk',
  'Polski',
  'Português',
  'Русский',
  'Español',
  'Svenska',
  'Filipino',
  'Thai',
  'Türkçe',
];

const LanguageOption = () => {
  const classes = useStyles();
  return (
    <select className={classes.dropdown} aria-label="Switch Display Language">
      {languages.map((language, id) => {
        return (
          <option className={classes.content} key={id} value={language}>
            {language}
          </option>
        );
      })}
    </select>
  );
};

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.list}>
        <div className={classes.footerList1}>
          {footerList.map((item) => {
            return (
              <div key={item.id} className={classes.itemBox}>
                <Typography variant="body2" className={classes.item}>
                  {item.name}
                </Typography>
              </div>
            );
          })}
        </div>
        <div className={classes.footerList2}>
          {footerList2.map((item) => {
            return (
              <div key={item.id} className={classes.itemBox2}>
                <Typography variant="body2" className={classes.item}>
                  {item.name}
                </Typography>
              </div>
            );
          })}
        </div>
        <div className={clsx(classes.list, classes.list2)}>
          <div className={classes.dropdownBox}>{/* <LanguageOption /> */}</div>
          <div className={classes.copyright}>
            <Typography variant="body2" className={classes.item}>
              {'© '}
              {new Date().getFullYear()} Instagram from Facebook
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
