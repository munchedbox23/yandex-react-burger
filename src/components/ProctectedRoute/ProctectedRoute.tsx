import { useAppSelector } from "../../services/store/hooks";
import { Navigate, useLocation } from "react-router";
import { ROUTE } from "../../utils/constants";
import { FC, ReactElement } from "react";

interface TProtectedProps {
  component: ReactElement;
  onlyUnAuth?: boolean;
}

const Protected: FC<TProtectedProps> = ({ component, onlyUnAuth = false }) => {
  const isAuthChecked = useAppSelector((store) => store.user.isAuthChecked);
  const user = useAppSelector((store) => store.user.user);
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
