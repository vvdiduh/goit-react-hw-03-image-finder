import { Component } from 'react';
import './Button.styled.css';

class Button extends Component {
  state = {};

  handleClick = () => {
    this.props.loadMoreImages();
  };

  render() {
    return (
      <button className="Button" onClick={this.handleClick}>
        Load More
      </button>
    );
  }
}

export default Button;
