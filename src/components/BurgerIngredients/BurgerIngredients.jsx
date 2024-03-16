import React from "react";
import styles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import IngredientCard from "../IngredientCard/IngredientCard";

export default class BurgerIngredients extends React.Component {
  constructor({ data }) {
    super();
    this.data = data;
    this.tabs = [
      {
        id: 1,
        type: "bun",
        typeName: "Булки",
        value: "one",
      },
      {
        id: 2,
        type: "sauce",
        typeName: "Соусы",
        value: "two",
      },
      {
        id: 3,
        type: "main",
        typeName: "Начинки",
        value: "three",
      },
    ];
    this.state = {
      current: "one",
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(value) {
    this.setState({
      current: value,
    });
  }

  render() {
    const { current } = this.state;
    return (
      <section className={`${styles.burgerIngredients} pt-10`}>
        <h1 className="text text_type_main-large mb-5">Соберите бургер</h1>
        <div className={styles.tabContainer}>
          {this.tabs.map(({ id, typeName, value }) => (
            <a key={id} href={`#${value}`}>
              <Tab
                value={value}
                active={current === value}
                onClick={() => this.handleTabClick(value)}
              >
                {typeName}
              </Tab>
            </a>
          ))}
        </div>
        <div className={styles.ingredientsWrapper}>
          {this.tabs.map(({ id, type, typeName, value }) => (
            <div key={id} className={styles.ingredientsContent}>
              <h2 id={value} className="text text_type_main-medium">
                {typeName}
              </h2>
              <div className={`${styles.ingredientsMenu} pt-6 pb-10 pl-4 pb-4`}>
                {this.data
                  .filter((item) => item.type === type)
                  .map((item) => (
                    <IngredientCard
                      key={item._id}
                      imageLink={item.image}
                      price={item.price}
                      ingredientName={item.name}
                    />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};
