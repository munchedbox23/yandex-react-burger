import {
  Logo,
  ProfileIcon,
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";
import HeaderButton from "../HeaderButton/HeaderButton";
import { ROUTE } from "../../utils/constants";
import { FC } from "react";

const AppHeader: FC = () => {
  return (
    <header className={`${headerStyles.header} pt-4 pb-4`}>
      <div className={headerStyles.wrapper}>
        <div className={headerStyles.navWrapper}>
          <nav>
            <ul className={headerStyles.navMenu}>
              <li>
                <HeaderButton
                  icon={BurgerIcon}
                  text="Конструктор"
                  link={ROUTE.main}
                />
              </li>
              <li>
                <HeaderButton
                  icon={ListIcon}
                  text="Лента заказов"
                  link={ROUTE.mainLayout.feed}
                />
              </li>
            </ul>
          </nav>
          <Logo />
        </div>
        <div className={headerStyles.profileAccount}>
          <HeaderButton
            icon={ProfileIcon}
            text="Личный кабинет"
            link={ROUTE.userProfile.profile}
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
