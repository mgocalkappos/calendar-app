import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';

const Sidebar = (props) => {
    let { children, width, height } = props;


    return (
      <div className={styles.sidebar} style={{width: width, minHeight: height }}>
        <React.Fragment>{children}</React.Fragment>
        <div>
          <div className={styles.separator}/>
        </div>
      </div>
    );
};

Sidebar.propTypes = {
  tabs: PropTypes.string.isRequired, //for now
  width: PropTypes.string,
  height: PropTypes.string,
};

Sidebar.defaultProps = {
  width: "25vw",
};

export default Sidebar;
