import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.scss';

const LoaderApp = () => (
  <div className={styles.loader}>
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={150}
      width={150}
      timeout={3000}
    />
  </div>
);

export default LoaderApp;
