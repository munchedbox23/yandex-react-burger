import { NavLink } from "react-router-dom";
import styles from "./HeaderButton.module.css";
import PropTypes from "prop-types";

const HeaderButton = ({ link, icon: Icon, text }) => {
  return (
    <NavLink to={link} className={`${styles.link} pt-4 pr-5 pb-4 pl-5`}>
      {({ isActive }) => (
        <>
          <Icon type={isActive ? "primary" : "secondary"} />
          <span
            className={`text text_type_main-default ${
              isActive ? "text_color_primary" : "text_color_inactive"
            }`}
          >
            {text}
          </span>
        </>
      )}
    </NavLink>
  );
};

HeaderButton.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};

export default HeaderButton;
