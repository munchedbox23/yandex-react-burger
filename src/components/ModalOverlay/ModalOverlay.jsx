import styles from './ModalOverlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({onClose}) => {
  return <div onClick={onClose} className={styles.overlay}></div>
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ModalOverlay;
