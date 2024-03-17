import React from "react";
import headerStyles from "./AppHeader.module.css";
import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "../HeaderButton/HeaderButton";

export default class AppHeader extends React.Component {
  render() {
    return (
      <header className={`${headerStyles.header} pt-4 pb-4`}>
        <div className={headerStyles.wrapper}>
          <div className={headerStyles.navWrapper}>
            <nav>
              <ul className={headerStyles.navMenu}>
                <li>
                  <HeaderButton
                    link={"#"}
                    icon={BurgerIcon}
                    text="Конструктор"
                    active
                  />
                </li>
                <li>
                  <HeaderButton
                    link={"#"}
                    icon={ListIcon}
                    text="Лента заказов"
                  />
                </li>
              </ul>
            </nav>
            <Logo />
          </div>
          <div className={headerStyles.profileAccount}>
            <HeaderButton link={"#"} icon={ProfileIcon} text="Личный Кабинет" />
          </div>
        </div>
      </header>
    );
  }
}
