interface IApi {
  baseUrl: string;
  endpoints: Record<string, string>;
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

export const WEBSOCKET_API: IApi = {
  baseUrl: "wss://wss://norma.nomoreparties.space",
  endpoints: {
    profileOrders: "/orders",
    allOrders: "/orders/all",
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
