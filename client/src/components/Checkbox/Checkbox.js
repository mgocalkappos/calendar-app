import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";

{/* import { faCoffee } from '@fortawesome/free-solid-svg-icons'
   <FontAwesomeIcon icon={["fal", "coffee"]} />
   <FontAwesomeIcon icon="coffee" />
   <i class="fas fa-check"></i>
   */}
   

const Checkbox = (props) => {
    let { checked, onClick } = props;

    return (
        <div onClick={onClick} className={styles.checkbox}>
            {checked && <FontAwesomeIcon icon={faCheck} />}
        </div>
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func,
};

Checkbox.defaultProps = {
    checked: false,
};

export default Checkbox;
