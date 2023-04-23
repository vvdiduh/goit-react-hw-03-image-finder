import React, { Component } from 'react';
import './Modal.styled.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      // Код клавіші "Esc" дорівнює 27
      this.props.onClick();
    }
  };

  render() {
    const img = this.props.img;

    return (
      <div className="Overlay" onKeyDown={this.handleKeyDown}>
        <div className="Modal">
          <img src={img} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
