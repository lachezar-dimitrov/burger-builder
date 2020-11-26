/* eslint-disable import/no-unresolved */
import classes from './BuildControl.css';
import PropTypes from 'prop-types';
import React from 'react';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>

      <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>
        Less
      </button>

      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
};

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BuildControl;
