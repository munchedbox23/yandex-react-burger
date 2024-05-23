interface IApiEndpoints {
  order: string;
  ingredients: string;
  register: string;
  login: string;
  refreshToken: string;
  logout: string;
  forgotPassword: string;
  resetPassword: string;
  userData: string;
}

interface IApi {
  baseUrl: string;
  endpoints: IApiEndpoints;
}

interface IRoutes {
  main: string;
  mainLayout: {
    login: string;
    register: string;
    resetPass: string;
    forgotPass: string;
    currIngredient: string;
    feed: string;
  };
  userProfile: {
    profile: string;
    orders: string;
  };
}

export const API: IApi = {
  baseUrl: "https://norma.nomoreparties.space/api",
  endpoints: {
    order: "/orders",
    ingredients: "/ingredients",
    register: "/auth/register",
    login: "/auth/login",
    refreshToken: "/auth/token",
    logout: "/auth/logout",
    forgotPassword: "/password-reset",
    resetPassword: "/password-reset/reset",
    userData: "/auth/user",
  },
};

export const ROUTE: IRoutes = {
  main: "/",
  mainLayout: {
    login: "login",
    register: "register",
    resetPass: "/reset-password",
    forgotPass: "forgot-password",
    currIngredient: "/ingredients/:ingredientId",
    feed: "feed",
  },
  userProfile: {
    profile: "/profile",
    orders: "orders",
  },
};

export const fadeInVariant = Object.freeze({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
});
