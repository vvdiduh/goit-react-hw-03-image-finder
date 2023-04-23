import { Component } from 'react';
import { toast } from 'react-toastify';
import './Searchbar.styles.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.error('Ведіть назву зображення', {
        position: 'top-center',
        theme: 'colored',
      });
    }
    this.setState({ value: '' });
    this.props.onSubmit(this.state.value);
  };

  onInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.toLowerCase() });
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
