import styles from "./HeaderButton.module.css";
import PropTypes from "prop-types";

const HeaderButton = ({ icon, link, text, active }) => {
  const Icon = icon;

  return (
    <a href={link} className={`${styles.link} pt-4 pr-5 pb-4 pl-5`}>
      <Icon type={active ? "primary" : "secondary"} />
      <span
        className={`text text_type_main-default ${
          active ? "text_color_primary" : "text_color_inactive"
        }`}
      >
        {text}
      </span>
    </a>
  );
};

HeaderButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export default HeaderButton;
