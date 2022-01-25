import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageNav.module.scss';
import {NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const MyButton = styled(Button)({
  color: 'white',
});

const PageNav = props => (
  <nav className={styles.component}>
    <MyButton component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</MyButton>
    <MyButton component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</MyButton>
    <MyButton component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</MyButton>
    <MyButton component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</MyButton>
    <MyButton component={NavLink} to={`${process.env.PUBLIC_URL}/Kitchen`} activeClassName='active'>Kitchen</MyButton>
  </nav>
);

PageNav.propTypes = {
  children: PropTypes.node,
};

export default PageNav;
