import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ webformatURL }) => (
  <li className={styles.imageGalleryItem}>
    <img
      src={webformatURL}
      alt={webformatURL}
      className={styles.imageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
