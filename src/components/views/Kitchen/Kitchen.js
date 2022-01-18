import React from 'react';
import styles from './Kitchen.module.scss';
import PropTypes from 'prop-types';

const Kitchen = props => {
  return (
    <div className={styles.component}>
      <h2>Kitchen view</h2>
    </div>
  );
};

Kitchen.propTypes = {
  children: PropTypes.node,
};

export default Kitchen;
