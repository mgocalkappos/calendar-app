import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.css';
import logo from '../../assets/chronomy-logo.png';

const Banner = (props) => {
    let { calendarTitle } = props;

    return (
      <div className = {styles.banner}>
        <img
          src={logo}
          alt={"logo"}
          className={styles.logo}
        />
        <h1 className = {styles.calendarTitle}> { calendarTitle } </h1>
      </div>
    );
};

Banner.propTypes = {
 calendarTitle: PropTypes.string.isRequired,
};

Banner.defaultProps = {
  calendarTitle: 'Untitled',
};

export default Banner;
