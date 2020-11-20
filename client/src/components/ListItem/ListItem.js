import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.css';
import Checkbox from '../../components/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default class ListItem extends Component {
  constructor(props) {
      super(props);

      let { } = this.props;

      this.state = {
          isChecked: false,
      };
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
  };

  static defaultProps = {

  };

  toggleCheck() {
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
  }

  render() {
        let { label } = this.props;

        let { isChecked } = this.state;

        let MAX_LENGTH = 35;

        if (label.length >= MAX_LENGTH) {
          var lbl = label.substr(0, MAX_LENGTH) + "\u2026";
        }
        else {
          var lbl = label;
        }

        return (
            <div className = {styles.listitem}>
              <div className = {styles.label}> { lbl } </div>
              <div className = {styles.actionItems}>
                <div className = {styles.delete}>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => {alert('Button Clicked')}}
                  />
                </div>
                <div className = {styles.checkbox}>
                  <Checkbox
                    checked = {this.state.isChecked}
                    onClick = {() => this.toggleCheck()}
                  />
                </div>
              </div>
            </div>
        );
    }
}

{/*const Checklist = (props) => {
    let {  } = props;

    return (
      <div>
        <h3> Checklist </h3>
        <Checkbox
          checked = {this.state.checked}
          onClick = {() => this.toggleCheck()}
        />
      </div>
    );
};

Checklist.propTypes = {

};

Checklist.defaultProps = {

};

export default Checklist;
*/}
