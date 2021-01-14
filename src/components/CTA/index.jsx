import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import appleIcon from './appleIcon.png';
import googleIcon from './googleIcon.png';

const useStyles = makeStyles((theme) => ({
  cta: {
    padding: '20px 20px 10px 20px',
    textAlign: 'center',
    color: '#262626',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '10px 0px',
  },
  image: {
    height: '40px',
  },
  apple: {
    marginRight: 6,
  },
}));

const CTA = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="body1" className={classes.cta}>
        Get the app.
      </Typography>
      <div className={classes.icons}>
        <a
          className={classes.apple}
          target="_blank"
          rel="noreferrer"
          href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo"
        >
          <img
            src={appleIcon}
            className={classes.image}
            alt="Available on the App Store"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DA5DCFDD6-5424-41F5-8B2E-EDBE3082CC62%26utm_content%3Dlo%26utm_medium%3Dbadge&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
        >
          <img
            className={classes.image}
            alt="Available on Google Play"
            src={googleIcon}
          />
        </a>
      </div>
    </div>
  );
};

export default CTA;
