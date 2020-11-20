import React from 'react';
import PropTypes from 'prop-types';
import styles from './SidebarTab.module.css';

const SidebarTab = (props) => {
    let { calendarTitle } = props;

    return (
      <div className={styles.tab}>
        <h2 className = {styles.calendarTitle}> { calendarTitle } </h2>
      </div>
    );
};

SidebarTab.propTypes = {
 calendarTitle: PropTypes.string.isRequired,
};

SidebarTab.defaultProps = {
  calendarTitle: 'Untitled',
};

export default SidebarTab;
