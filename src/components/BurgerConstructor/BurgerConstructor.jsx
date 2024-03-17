import React from "react";
import styles from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default class BurgerConstructor extends React.Component {
  constructor({ data }) {
    super();
    this.data = data;
  }
  render() {
    return (
      <section className={`${styles.burgerConstructor} pt-25 pl-4 pr-4`}>
        <div className={`${styles.constructorWrapper}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={this.data[0].image}
            extraClass="ml-8"
          />
          <ul className={`${styles.constructorList} mt-4 mb-4`}>
            {this.data
              .filter((item) => item.type === "main" || item.type === "sause")
              .map(({ _id, name, price, image }) => (
                <li key={_id} className={`${styles.constructorItem} ml-2 mb-4`}>
                  <div className={styles.drag}>
                    <DragIcon type="primary" />
                  </div>
                  <ConstructorElement
                    text={name}
                    price={price}
                    thumbnail={image}
                    extraClass={`${styles.centerBun}`}
                  />
                </li>
              ))}
          </ul>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={this.data[0].image}
            extraClass="ml-8"
          />
        </div>
        <div className={`${styles.total} mt-10`}>
          <div className={styles.priceTotal}>
            <span className="text text_type_digits-medium">610</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="medium">
            Офорить заказ
          </Button>
        </div>
      </section>
    );
  }
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};
