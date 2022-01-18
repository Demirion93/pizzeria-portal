import React from 'react';
import styles from './Login.module.scss';

const Login = props => {
  return (
    <div className={styles.component}>
      <h2>Login view</h2>
    </div>
  );
};

Login.propTypes = {
  children: Login.node,
};

export default Login;
