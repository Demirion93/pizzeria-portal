import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Login = () => (
  <div className={styles.component}>
    <Paper>
      <Typography className={styles.title} variant="h4" component="h4" gutterBottom>
        Sign In
      </Typography>
      <form className={styles.wrapper}>

        <TextField className={styles.input}
          id="filled-password-input"
          label="Login"
          type="text"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField className={styles.input}
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <Button className={styles.button} variant="contained" color="primary" href={process.env.PUBLIC_URL}>
          Log In
        </Button>
      </form>
    </Paper>
  </div>
);

export default Login;
