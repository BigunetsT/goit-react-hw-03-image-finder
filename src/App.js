import React, { Component } from 'react';
import ImagesApi from './servieces/images-api';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Modal from './components/Modal';
import './styles.css';

const imagesApi = new ImagesApi();
class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    error: null,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };
  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };
    this.setState({ isLoading: true });
    imagesApi
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
        if (currentPage > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  openModal = event => {
    const { images } = this.state;
    const currentId = Number(event.target.getAttribute('id'));
    const modalImageURL = images.find(image => image.id === currentId)
      .largeImageURL;
    this.setState({
      showModal: true,
      largeImageURL: modalImageURL,
    });
  };
  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };
  render() {
    const {
      searchQuery,
      images,
      isLoading,
      showModal,
      largeImageURL,
    } = this.state;
    const showBtn = images.length > 0 && !isLoading;
    return (
      <div className="app">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} onClick={this.openModal} />
        {isLoading && <Loader />}
        {showBtn && <Button onClick={this.fetchImages}>Load more</Button>}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt={searchQuery} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
