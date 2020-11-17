import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.css';
import Checkbox from '../../components/Checkbox';

export default class ListItem extends Component {
  constructor(props) {
      super(props);

      let { } = this.props;

      this.state = {
          isChecked: false,
      };
  }

  static propTypes = {
    label: PropTypes.string,
  };

  static defaultProps = {

  };

  toggleCheck() {
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
  }

  render() {
        let { label } = this.props;

        let { isChecked } = this.state;

        let inputContainerStyle = styles.inputContainer;

        {/*if (isChecked) inputContainerStyle += ` ${styles.activeInputContainer}`;
        else if (disabled) inputContainerStyle += ` ${styles.disabledInputContainer}`;
        */}
        return (
            <div>
              <h3> Checklist </h3>
              <Checkbox
                checked = {this.state.isChecked}
                onClick = {() => this.toggleCheck()}
              />
            </div>
        );
    }
}

{/*  toggleCheck = (isChecked) => {
      this.setState({ isChecked });
  }; */}

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
