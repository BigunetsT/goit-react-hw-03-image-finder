import axios from 'axios';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImagesApi extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
  };
  fetchImages = ({ searchQuery, currentPage }) => {
    return axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=20615948-2e61cae167f5f13f5514a6165&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(response => response.data.hits);
  };
}

export default ImagesApi;
