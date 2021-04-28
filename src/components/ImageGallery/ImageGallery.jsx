import PropTypes from 'prop-types';
import styles from './ImageGallery.module.scss';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => (
  <ul className={styles.imageGallery}>
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        webformatURL={webformatURL}
        onClick={onClick}
      />
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
  onClick: PropTypes.func.isRequired,
};
export default ImageGallery;
