import { useAppSelector } from "../../services/store/hooks";
import { Navigate, useLocation } from "react-router";
import { ROUTE } from "../../utils/constants";
import { FC, ReactElement } from "react";
import { shallowEqual } from "react-redux";

interface TProtectedProps {
  component: ReactElement;
  onlyUnAuth?: boolean;
}

const Protected: FC<TProtectedProps> = ({ component, onlyUnAuth = false }) => {
  const { isAuthChecked, user } = useAppSelector(
    (store) => ({
      isAuthChecked: store.user.isAuthChecked,
      user: store.user.user,
    }),
    shallowEqual
  );

  const location = useLocation();

  if (!isAuthChecked) return null;

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: ROUTE.main } };
    return <Navigate to={from} replace />;
  }

  if (!onlyUnAuth && !user) {
    return (
      <Navigate to={`/${ROUTE.mainLayout.login}`} state={{ from: location }} />
    );
  }

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: { component: ReactElement }) => (
  <Protected onlyUnAuth={true} component={component} />
);
