import React from "react";
import styles from "./HeaderButton.module.css";
import PropTypes from "prop-types";

export default class HeaderButton extends React.Component {
  constructor({ link, icon, text, active }) {
    super();
    this.link = link;
    this.icon = icon;
    this.text = text;
    this.active = active;
  }
  render() {
    const Icon = this.icon;
    return (
      <a href={this.link} className={`${styles.link} pl-5 pr-5 pt-4 pb-4`}>
        <Icon type={this.active ? "primary" : "secondary"} />
        <span
          className={`text text_type_main-default ${
            this.active ? "text_color_primary" : "text_color_inactive"
          }`}
        >
          {this.text}
        </span>
      </a>
    );
  }
}

HeaderButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  active: PropTypes.bool,
};
