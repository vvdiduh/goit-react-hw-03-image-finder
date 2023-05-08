import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import './App.styled.css';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    searchImg: '',
    modalImg: '',
  };

  hendlSubmit = searchImg => {
    this.setState({ searchImg });
  };

  onClick = modalImg => {
    this.setState({ modalImg });
  };

  render() {
    return (
      <div className=".App">
        <Searchbar onSubmit={this.hendlSubmit} />
        <ImageGallery searchImg={this.state.searchImg} />
        <ToastContainer autoClose={900} />
      </div>
    );
  }
}
