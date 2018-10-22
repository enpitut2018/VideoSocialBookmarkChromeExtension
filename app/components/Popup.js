import React, { PropTypes } from 'react';

const styles = {
  popup: {
    font: '14px Helvetica Neue, Helvetica, Arial, sans-serif',
    lineHeight: '1.4em',
    background: '#f5f5f5',
    color: '#4d4d4d',
    minWidth: '230px',
    maxWidth: '550px',
    margin: '0 auto',
    WebkitFontSmoothing: 'antialiased',
    MozFontSmoothing: 'antialiased',
    msFontSmoothing: 'antialiased',
    fontSmoothing: 'antialiased',
    fontWeight: 300,
  }
};

export default class Popup extends React.Component {

  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div style={styles.popup}>
        {this.props.children}
      </div>
    );
  }
}
