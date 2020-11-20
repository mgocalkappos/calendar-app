import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Sidebar.module.css';
import SidebarTab from '../../components/SidebarTab';

export default class Checklist extends Component {
  constructor(props) {
      super(props);

      let { } = this.props;

      this.state = {
        calendars: []
      };
  }

  static propTypes = {
    tabs: PropTypes.string.isRequired, //for now
    width: PropTypes.string,
    height: PropTypes.string,
  };

  static defaultProps = {
    width: "25vw",
  };

  componentDidMount() {
    fetch('/api/calendars')
      .then(res => res.json())
      .then(calendars => this.setState({calendars}));
  }

  render() {
        let { children, width, height } = this.props;

        let {  } = this.state;

        return (
          <div className={styles.sidebar} style={{width: width, minHeight: height }}>
            <div>
                {this.state.calendars.map(calendars =>
                  <div key={calendars.id}>
                    <SidebarTab
                      calendarTitle = {calendars.title}
                      />
                  </div>
                )}
            </div>
            <div>
              <SidebarTab
                calendarTitle = '+'
                />
            </div>
          </div>
        );
    }
}

{/*const Sidebar = (props) => {
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

export default Sidebar;*/}
