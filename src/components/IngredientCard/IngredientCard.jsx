import React from "react";
import styles from "./IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default class IngredientCard extends React.Component {
  constructor({ imageLink, price, ingredientName }) {
    super();
    this.imageLink = imageLink;
    this.price = price;
    this.ingredientName = ingredientName;
    this.state = {
      counter: 0,
    };
  }
  render() {
    const { counter } = this.state;
    return (
      <div className={styles.ingredientCard}>
        <Counter size="default" count={counter} className={styles.counter} />
        <img
          className={`${styles.ingredientImg} ml-4 mr-4 mb-1`}
          src={this.imageLink}
          alt={this.ingredientName}
        />
        <div className={styles.ingredientPrice}>
          <span className="text text_type_main-medium">{this.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className={`${styles.ingredientName} text text_type_main-default`}>
          {this.ingredientName}
        </h3>
      </div>
    );
  }
}

IngredientCard.propTypes = {
  imageLink: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredientName: PropTypes.string.isRequired,
};
