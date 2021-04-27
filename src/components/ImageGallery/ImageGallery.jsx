import PropTypes from 'prop-types';
import styles from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className={styles.imageGallery}>
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default ImageGallery;
