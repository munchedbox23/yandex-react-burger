import headerStyles from "./AppHeader.module.css";
import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "../HeaderButton/HeaderButton";

const AppHeader = () => {
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
                  link={"#"}
                  active
                />
              </li>
              <li>
                <HeaderButton icon={ListIcon} text="Лента заказов" link={"#"} />
              </li>
            </ul>
          </nav>
          <Logo />
        </div>
        <div className={headerStyles.profileAccount}>
          <HeaderButton icon={ProfileIcon} text="Личный кабинет" link={"#"} />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
