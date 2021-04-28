import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ id, webformatURL, onClick }) => (
  <li className={styles.imageGalleryItem}>
    <img
      src={webformatURL}
      alt={webformatURL}
      id={id}
      className={styles.imageGalleryItemImage}
      onClick={onClick}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
