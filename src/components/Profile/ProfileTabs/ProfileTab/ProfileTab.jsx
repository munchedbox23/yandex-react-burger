import { NavLink } from "react-router-dom";

export const ProfileTab = ({ route, text, className }) => {
  return (
    <li className={className}>
      <NavLink to={route}>
        {({ isActive }) => (
          <span
            className={`${
              isActive ? "text_color_primary" : "text_color_inactive"
            } text text_type_main-medium`}
          >
            {text}
          </span>
        )}
      </NavLink>
    </li>
  );
};
