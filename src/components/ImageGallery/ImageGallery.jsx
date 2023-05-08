import { Component } from 'react';
import { Audio } from 'react-loader-spinner';
import ImageGalleryItems from './ImageGalleryItem/ImageGalleryItem';
// import ImageGalleryItems from './ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.styled.css';
import Modal from './Modal/Modal';
import Button from 'components/Button/Button';
import { getImg, addImg } from 'services/api';

class ImageGallery extends Component {
  state = {
    arrayImg: null,
    totalImg: null,
    per_page: 20,
    error: null,
    imgInModal: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props);
    const prevSearchImg = prevProps.searchImg;
    const newSearchImg = this.props.searchImg;

    if (prevSearchImg !== newSearchImg) {
      this.setState({ status: 'pending', arrayImg: null });

      getImg(newSearchImg)
        .then(resp => resp.json())
        .then(arrayImg =>
          this.setState({
            arrayImg: arrayImg.hits,
            totalImg: arrayImg.total,
            status: 'resolved',
          })
        )
        .catch(error => this.setState({ error }));
    }
  }

  openModal = ({ target }) => {
    this.setState({ imgInModal: target.src });
  };

  closeModal = e => {
    this.setState({ imgInModal: null });
  };

  loadMoreImages = () => {
    const { per_page } = this.state;
    const newSearchImg = this.props.searchImg;
    const newPerPage = per_page + 20;

    addImg(newSearchImg, newPerPage)
      .then(resp => resp.json())
      .then(newArrayImg =>
        this.setState({
          arrayImg: [...newArrayImg.hits],
          per_page: newPerPage,
        })
      )
      .catch(error => this.setState({ error }));
  };

  render() {
    const { arrayImg, totalImg, imgInModal, status } = this.state;

    if (status === 'idle') {
      return <div>Введіть назву зображення</div>;
    }

    if (status === 'pending') {
      return (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      );
    }

    if (totalImg === 0) {
      return <h1>Not find images</h1>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className="gallery">
            {
              <div className="ImageGallery">
                <ImageGalleryItems
                  arrayImg={arrayImg}
                  onClick={this.openModal}
                />
              </div>
            }

            {imgInModal && (
              <>
                <Modal img={imgInModal} onClick={this.closeModal} />
              </>
            )}
          </ul>
          {arrayImg && <Button loadMoreImages={this.loadMoreImages} />}
        </>
      );
    }
  }
}

export default ImageGallery;
