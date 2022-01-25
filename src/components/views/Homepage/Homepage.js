import React from 'react';
import styles from './Homepage.module.scss';
import PropTypes from 'prop-types';

const Homepage = props => {
  return (
    <div className={styles.component}>
      <h2>Homepage view</h2>
    </div>
  );
};

Homepage.propTypes = {
  children: PropTypes.node,
};

export default Homepage;

