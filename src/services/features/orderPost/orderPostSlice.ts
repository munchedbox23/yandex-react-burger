import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../../utils/requests";
import { API } from "../../../utils/constants";
import { IIngredientsWithIdx } from "../../../types/ingredient-types";
import { IOrderResponse } from "../../../types/order-types";
import { cookies } from "../user/auth";

type TOrderState = {
  orderList: IOrderResponse | null;
  postFailed: boolean;
  postRequest: boolean;
};

export const initialState: TOrderState = {
  orderList: null,
  postRequest: false,
  postFailed: false,
};

export const handleAndPlaceOrder = createAsyncThunk(
  "postOrder/handleAndPlaceOrder",
  async (order: IIngredientsWithIdx[]) => {
    const accessToken = cookies.get("accessToken");
    const response = await request<IOrderResponse>(
      `${API.baseUrl}${API.endpoints.order}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          ingredients: order.map((item) => item._id),
        }),
      }
    );
    return response;
  }
);

export const orderPostSlice = createSlice({
  name: "postOrder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleAndPlaceOrder.pending, (state) => {
        state.postRequest = true;
      })
      .addCase(handleAndPlaceOrder.fulfilled, (state, action) => {
        state.orderList = action.payload;
        state.postRequest = false;
        state.postFailed = false;
      })

      .addCase(handleAndPlaceOrder.rejected, (state) => {
        state.postRequest = false;
        state.postFailed = true;
      });
  },
});

export const {} = orderPostSlice.actions;
export default orderPostSlice.reducer;
