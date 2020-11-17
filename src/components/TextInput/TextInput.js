import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';

const Sidebar = (props) => {
    let { label, buttonLabel, onClick, text, onChange } = props;


    return (
      <div className={styles.textInput}>
          <input
              className={styles.textInputField}
              type="text"
              placeholder={label}
              onChange={onChange}
          />
          <button onClick={onClick} className={styles.textInputButton}>
              {buttonLabel}
          </button>
      </div>
    );
};

Sidebar.propTypes = {
  label: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
    buttonLabel: 'Add',
};

export default Sidebar;
