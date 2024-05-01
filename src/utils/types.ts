import { TIngredient } from "./tabs";

export interface IIngredient {
  _id: string;
  name: string;
  type: TIngredient;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  _v: number;
}

export interface IIngredientsWithIdx extends IIngredient {
  idx: string;
}

