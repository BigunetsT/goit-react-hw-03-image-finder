import PropTypes from 'prop-types';
// import styles from './Button.module.css';

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
