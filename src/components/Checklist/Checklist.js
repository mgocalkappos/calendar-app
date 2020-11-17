import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checklist.module.css';
import ListItem from '../../components/ListItem';

const Checklist = (props) => {
    let {  } = props;

    return (
      <div>
        <ListItem
          label = "Do groceries"
        />
      </div>
    );
};

Checklist.propTypes = {

};

Checklist.defaultProps = {

};

export default Checklist;
