import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import imagesApi from './servieces/images-api';
import Button from './components/Button';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] });
  };
  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };
    imagesApi.fetchImages(options).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        currentPage: prevState.currentPage + 1,
      }));
    });
  };
  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul>
          {images.map(({ id, webformatURL }) => (
            <li key={id}>
              <a href={webformatURL}>{webformatURL}</a>
            </li>
          ))}
        </ul>
        {images.length > 0 && (
          <Button onClick={this.fetchImages}>Load more</Button>
        )}
      </>
    );
  }
}

export default App;
