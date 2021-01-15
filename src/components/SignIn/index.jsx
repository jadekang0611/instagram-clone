import React from 'react';
import {
  Typography,
  Grid,
  CssBaseline,
  Button,
  TextField,
  Paper,
  FormControlLabel,
  ButtonBase,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../Custom/CustomButton';
import CustomField from '../Custom/CustomField';
import Redirect from '../Redirect';
import CTA from '../CTA';
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  parent: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '12px',
    maxWidth: '350px',
  },
  main: {
    border: '1px solid #dbdbdb',
    margin: '0px 0px 10px 0px',
    backgroundColor: theme.palette.white,
    padding: '10px 0',
    alignItems: 'center',
  },
  formBox: {
    marginTop: '24px',
    marginBottom: '20px',
  },
  name: {
    textAlign: 'center',
    margin: '22px auto 44px auto',
  },
  message: {
    margin: '0 40px 10px',
    textAlign: 'center',
  },
  buttonBox: {
    margin: '16px 40px 16px 40px',
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 40px 18px',
  },
  line: {
    flexGrow: 1,
    flexShrink: 1,
    height: '1px',
    position: 'relative',
    top: '.45em',
    backgroundColor: '#dbdbdb',
  },
  between: {
    color: '#8e8e8e',
    flexGrow: 0,
    flexShrink: 0,
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: '15px',
    margin: '0 18px',
    textTransform: 'uppercase',
  },
  outerField: {
    margin: '6px 40px',
  },
  legal: {
    color: '#8e8e8e',
    fontSize: '12px',
    lineHeight: '16px',
    margin: '10px 40px',
    textAlign: 'center',
  },
  link: {
    color: '#8e8e8e',
    fontWeight: 600,
    textDecoration: 'none',
    '&visited': {
      color: '#8e8e8e',
    },
  },
  facebookBox: {
    margin: '8px 40px',
    textAlign: 'center',
  },
  root: {
    color: '#385185',
  },
  guide: {
    fontSize: '14px',
    fontWeight: 600,
  },
  smallIcon: {
    marginRight: '8px',
    fontSize: '20px',
  },
  forgotBox: {
    textAlign: 'center',
    marginTop: '12px',
  },
  forgot: {
    color: '#00376b',
    fontSize: '12px',
    lineHeight: '14px',

    textDecoration: 'none',
    '&visited': {
      color: '#00376b',
      textDecoration: 'none',
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <div className={classes.main}>
        <CssBaseline />
        <Typography variant="h1" className={classes.name}>
          Instagram
        </Typography>
        <div className={classes.formBox}>
          <form autoComplete="off">
            <CustomField
              purpose={'Mobile Number or Email'}
              placeholder={'Phone number, username, or email'}
              type={'text'}
              name={'email'}
            />
            <CustomField
              purpose={'password'}
              placeholder={'Password'}
              type={'text'}
              name={'password'}
            />

            <div className={classes.buttonBox}>
              <CustomButton route={ROUTES.PROFILE} name={'Log In'} />
            </div>
            <div className={classes.option}>
              <div className={classes.line}></div>
              <div className={classes.between}>or</div>
              <div className={classes.line}></div>
            </div>
            <div className={classes.facebookBox}>
              <ButtonBase
                classes={{ root: classes.root, label: classes.label }}
                disableRipple="true"
              >
                <FacebookIcon className={classes.smallIcon} />
                <span className={classes.guide}>Log in with Facebook</span>
              </ButtonBase>
            </div>
            <div className={classes.forgotBox}>
              <a href="/" className={classes.forgot}>
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>

      <Redirect
        message={"Don't have an account?"}
        route={ROUTES.REGISTER}
        action={'Sign up'}
      />

      <CTA />
    </div>
  );
};

export default SignIn;
