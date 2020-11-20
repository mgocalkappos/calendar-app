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

  componentDidMount() {
    fetch('/api/listItems')
      .then(res => res.json())
      .then(listItems => this.setState({listItems}));
  }

  render() {
        let { title } = this.props;

        let {  } = this.state;

        return (
          <div className={styles.checklist}>
            <div className={styles.top}>
              <div className={styles.title}> {title} </div>
              <div className={styles.textInput}>
                <TextInput
                   label = 'Add To Do...'
                   buttonLabel = 'Add'
                   onClick = {() => {alert('Button Clicked')}}
                   textInput = ''
                   onChange = {() => {alert('onChange')}}
                />
              </div>
            </div>
            <div className={styles.itemList}>
                {this.state.listItems.map(listItems =>
                  <div key={listItems.id}>
                    <ListItem
                      label = {listItems.title}
                      />
                  </div>
                )}
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
