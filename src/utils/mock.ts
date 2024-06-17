import { v4 as uuidv4 } from "uuid";
import { IIngredientsWithIdx } from "../types/ingredient-types";
import { IWsOrders } from "../types/order-types";

export const ingredient1: IIngredientsWithIdx = {
  _id: "643d69a5c3f7b9001cfa0941",
  name: "Биокотлета из марсианской Магнолии",
  type: "main",
  proteins: 420,
  fat: 142,
  carbohydrates: 242,
  calories: 4242,
  price: 424,
  image: "https://code.s3.yandex.net/react/code/meat-01.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
  __v: 0,
  idx: uuidv4(),
};

export const ingredient2: IIngredientsWithIdx = {
  _id: "643d69a5c3f7b9001cfa093e",
  name: "Филе Люминесцентного тетраодонтимформа",
  type: "main",
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: "https://code.s3.yandex.net/react/code/meat-03.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
  __v: 0,
  idx: uuidv4(),
};

export const ingredient3: IIngredientsWithIdx = {
  _id: "643d69a5c3f7b9001cfa0942",
  name: "Соус Spicy-X",
  type: "sauce",
  proteins: 30,
  fat: 20,
  carbohydrates: 40,
  calories: 30,
  price: 90,
  image: "https://code.s3.yandex.net/react/code/sauce-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
  __v: 0,
  idx: uuidv4(),
};

export const mockUser = Object.freeze({
  name: "munchedboxTest",
  email: "test@test.com",
  password: "test123456",
});

export const mockOrder = Object.freeze({
  name: "Space флюоресцентный бургер",
  success: true,
  order: {
    _id: uuidv4(),
    createdAt: "2024-06-12T15:48:40.688Z",
    ingredients: [],
    name: "Space флюоресцентный бургер",
    number: 42223,
    price: 1068,
    status: "done",
    updatedAt: "2024-06-12T15:48:41.031Z",
    owner: {
      email: "test@test.ru",
      name: "test123",
      createdAt: "2024-06-01T15:48:40.688Z",
      updatedAt: "2024-05-12T15:48:41.031Z",
    },
  },
});

export const mockOrders: IWsOrders = {
  success: true,
  orders: [
    {
      _id: uuidv4(),
      createdAt: "2024-06-12T15:48:40.688Z",
      ingredients: [],
      name: "Space флюоресцентный бургер",
      number: 42223,
      status: "done",
      updatedAt: "2024-06-12T15:48:41.031Z",
    },
  ],
  total: 1,
  totalToday: 1,
};

export const mockBun: IIngredientsWithIdx = {
  _id: "643d69a5c3f7b9001cfa093d",
  name: "Флюоресцентная булка R2-D3",
  type: "bun",
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: "https://code.s3.yandex.net/react/code/bun-01.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
  __v: 0,
  idx: uuidv4(),
};

export const mockIngredients = [ingredient1, ingredient2, ingredient3];
