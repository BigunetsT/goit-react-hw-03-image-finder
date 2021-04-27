import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onClick, children }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Button;
