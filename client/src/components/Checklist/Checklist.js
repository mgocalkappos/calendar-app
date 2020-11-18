import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Checklist.module.css';
import ListItem from '../../components/ListItem';
import TextInput from '../../components/TextInput';

export default class Checklist extends Component {
  constructor(props) {
      super(props);

      let { } = this.props;

      this.state = {
        textInput: "",
        listItems: []
      };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {

  };

  render() {
        let { title } = this.props;

        let {  } = this.state;

        return (
          <div className="todoListMain">
            <div className="header">
              <TextInput
                 label = 'Add To Do...'
                 buttonLabel = 'Add'
                 onClick = {() => {alert('Button Clicked')}}
                 textInput = {(a) => this._inputElement = a}
                 onChange = { this.addItem }
              />
              <ul> {/*{this.state.results.map(result =>
                <li>
                  <ListItem
                    label = "Do groceries"
                  />
                </li>
              )}*/}
              </ul>
            </div>
          </div>
        );
    }
}

{/* const Checklist = (props) => {
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

export default Checklist; */}
