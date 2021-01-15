import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  outerField: {
    margin: '6px 40px',
  },
  labelnfield: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    fontSize: '14px',
    position: 'relative',
    width: '100%',
  },
  inputLabel: {
    display: 'flex',
    height: '36px',
    flex: '1 0 0',
    padding: 0,
    position: 'relative',
    margin: 0,
    minWidth: 0,
  },
  floatingLabel: {
    fontSize: '12px',
    height: '36px',
    color: '#8e8e8e',
    fontWeight: 500,
    left: '8px',
    overflow: 'hidden',
    position: 'absolute',
    lineHeight: '36px',
    right: 0,
    textOverflow: 'ellipsis',
    transformOrigin: 'left',
    transition: 'transform ease-out .1s,-webkit-transform ease-out .1s',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
  },
  formControl: {
    border: '1px solid #dbdbdb',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '3px',
    fontSize: '14px',
    lineHeight: '18px',
    padding: '9px 8px',
    flex: '1 0 auto',
    fontFamily: theme.typography.body2,
    '&:focus-visible': {
      border: '1px solid #a8a8a8',
      outline: 0,
    },
  },
}));

const CustomField = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.outerField}>
      <div className={classes.labelnfield}>
        <label purpose={props.purpose} className={classes.inputLabel}>
          <input
            className={classes.formControl}
            type={props.type}
            required={props.required}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.inputHandler}
            minLength={props.minLength}
          />
        </label>
      </div>
    </div>
  );
};

export default CustomField;
