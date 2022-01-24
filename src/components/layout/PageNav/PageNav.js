import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageNav.module.scss';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';

const PageNav = props => (
  <nav className={styles.component}>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/Kitchen`} activeClassName='active'>Kitchen</Button>
  </nav>
);

PageNav.propTypes = {
  children: PropTypes.node,
};

export default PageNav;
