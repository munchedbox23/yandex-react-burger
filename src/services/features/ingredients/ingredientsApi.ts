import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IIngredient,
  IIngredientResponse,
} from "../../../types/ingredient-types";
import { API } from "../../../utils/constants";

export const ingredientsApi = createApi({
  reducerPath: "ingredientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API.baseUrl,
  }),
  endpoints: (builder) => ({
    getIngredients: builder.query<IIngredient[], void>({
      query: () => API.endpoints.ingredients,
      transformResponse: (response: IIngredientResponse) => response.data,
    }),
  }),
});

export const { useGetIngredientsQuery } = ingredientsApi;
