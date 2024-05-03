import { NavLink, useLocation } from "react-router-dom";
import { FC } from "react";

type TProfileTabProps = {
  route: string;
  text: string;
  className?: string;
};

export const ProfileTab: FC<TProfileTabProps> = ({
  route,
  text,
  className,
}) => {
  const location = useLocation();

  return (
    <li className={className}>
      <NavLink to={route}>
        {({ isActive }) => (
          <span
            className={`${
              isActive &&
              location.pathname.split("/").pop() === route.split("/").pop()
                ? "text_color_primary"
                : "text_color_inactive"
            } text text_type_main-medium`}
          >
            {text}
          </span>
        )}
      </NavLink>
    </li>
  );
};
