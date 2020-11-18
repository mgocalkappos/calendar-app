import React, { Component } from 'react';
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar';
import Calendar from '../../components/Calendar';
import Checkbox from '../../components/Checkbox';
import Checklist from '../../components/Checklist';
import ListItem from '../../components/ListItem';
import TextInput from '../../components/TextInput';

export default class Home extends Component {
  render() {
      return (
        <div>
          <h1>Calendar App</h1>
          <Checklist
            title = 'To Do List'
          />
        {/*  <TextInput
             label = 'Add ToDo'
             onClick = {() => {alert('Button Clicked')}}
             textInput = ''
             onChange = { () => {alert('onChange')} }
          />
        <ListItem
            label = "Do groceries"
          />
         <Sidebar width="20vw" height="100vh">
            <h2> Calendar </h2>
            <h2> Calendar 2 </h2>
          </Sidebar> */}
        </div>
      );
  }
}
