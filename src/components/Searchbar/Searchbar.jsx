import { Component } from 'react';
import './Searchbar.styles.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ value: '' });
  };

  onInput = e => {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="value"
            onChange={this.onInput}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
