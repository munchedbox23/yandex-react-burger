export const API = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  endpoints: {
    order: '/orders',
    ingredients: '/ingredients'
  }
};

export const ROUTE = {
  main: '/',
  mainLayout: {
    login: 'login',
    register: 'register',
    resetPass: 'reset-password',
    forgotPass: 'forgot-password',
    profile: 'profile',
    currIngredient: '/ingredients/:ingredientId'
  },
  
};
