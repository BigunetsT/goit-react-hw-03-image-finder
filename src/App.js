import React, { Component } from 'react';
import imagesApi from './servieces/images-api';
import Searchbar from './components/Searchbar';
import Button from './components/Button';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import './styles.css';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    error: null,
    isLoading: false,
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
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  render() {
    const { images, isLoading } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.fetchImages}>Load more</Button>
        )}
      </div>
    );
  }
}

export default App;
