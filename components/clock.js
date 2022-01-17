import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, LinearProgress, Button, Box } from "@material-ui/core";
import Countdown from "react-countdown";

const defaultStyles = {
  clockStyle: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    letterSpacing: '5px',
  },
  clockHeaderStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seperator: {
    marginBottom: '10px',
    fontSize: '18px',
    letterSpacing: 'initial',
    color: 'transparent',
  },
  digit: {
    width: 130,
  }
};

class ReactClock extends Component {
  static propTypes = {
    startDate: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    completed: PropTypes.func
  };

  static Seperator = ({ clockSeparator, shouldShow = true }) => {
    return <div className="clockSeparatorStyle">
      <span>{shouldShow ? (clockSeparator ? clockSeparator : ':') : ''}</span>
      <div style={{ ...defaultStyles.seperator }}>sp</div>
    </div>;
  }

  render() {
    const { startDate, text1, text2, complete } = this.props;

    const renderCounter = ({ days, hours, minutes, seconds, completed }) => {
      return (
        <>
          <div
            style={{
              ...defaultStyles.clockStyle,
            }}>
            <div style={{ ...defaultStyles.clockHeaderStyle }}>
              <div className="clockItemStyle">{days}</div>
              <div className="clockSubHeader"> days </div>
            </div>
            <ReactClock.Seperator />
            <div style={{ ...defaultStyles.clockHeaderStyle }}>
              <div className="clockItemStyle">{hours}</div>
              <div className="clockSubHeader"> Hours </div>
            </div>
            <ReactClock.Seperator />
            <div style={{ ...defaultStyles.clockHeaderStyle }}>
              <div className="clockItemStyle">{minutes}</div>
              <div className="clockSubHeader"> Minutes </div>
            </div>
            <ReactClock.Seperator />
            <div style={{ ...defaultStyles.clockHeaderStyle }}>
              <div className="clockItemStyle">{seconds}</div>
              <div className="clockSubHeader"> Seconds </div>
            </div>
          </div>
        </>
      );
    };

    return (
      <>
        <Box sx={{ position: 'relative' }}>
          <div className="clockTitleStyle" >
            <span style={{ color: '#00A79D', marginRight: 10 }}>{text1}</span> {text2}
          </div>
          <Countdown
            date={startDate}
            // onMount={({ completed }) => completed && complete()}
            // onComplete={() => complete()}
            renderer={renderCounter}
          />
        </Box>
      </>
    );
  }
}

export default ReactClock;