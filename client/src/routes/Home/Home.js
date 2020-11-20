import React, { Component } from 'react';
import styles from './Home.module.css';
import Sidebar from '../../components/Sidebar';
import Calendar from '../../components/Calendar';
import Checklist from '../../components/Checklist';
import Banner from '../../components/Banner';

export default class Home extends Component {
  render() {
      return (
        <div className={styles.pageLayout}>
          <div className={styles.header}>
            <Banner
              calendarTitle = 'My Calendar'
            />
          </div>
          <div className={styles.sidebar}>
            <Sidebar width="15vw" height="87vh">
                <h2> Calendar </h2>
                <h2> Calendar 2 </h2>
            </Sidebar>
          </div>
          <div className={styles.content}>
            <div className={styles.toDoList}>
              <Checklist
                  title = 'To Do List'
                />
            </div>
            <div className={styles.toBuyList}>
              <Checklist
                  title = 'To Buy List'
                />
            </div>
            <div className={styles.calendar}>
              <Calendar/>
            </div>
          </div>
        </div>
      );
  }
}
