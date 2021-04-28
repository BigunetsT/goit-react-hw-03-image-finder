import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.scss';

const LoaderApp = () => (
  <div className={styles.loader}>
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={5000}
    />
  </div>
);

export default LoaderApp;
