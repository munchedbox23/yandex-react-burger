import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../../../utils/requests";
import { API } from "../../../utils/constants";

const initialState = {
  orderList: null,
  postRequest: false,
  postFailed: false
};

export const handleAndPlaceOrder = createAsyncThunk('postOrder/handleAndPlaceOrder', async(order) => {
  const response = await request(`${API.baseUrl}${API.endpoints.order}`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ingredients: order.map((item) => item._id)})
});
  return response;
});


export const orderPostSlice = createSlice({
  name: 'postOrder',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(handleAndPlaceOrder.pending, (state) => {
      state.postRequest =  true;
    })
    .addCase(handleAndPlaceOrder.fulfilled, (state, action) => {
      state.orderList = action.payload;
      state.postRequest = false;
      state.postFailed = false;
    })
    
    .addCase(handleAndPlaceOrder.rejected, (state) => {
      state.postRequest =  false;
      state.postFailed = true;
    })
  }
});

export const {setOrder, resetOrder} = orderPostSlice.actions;
export default orderPostSlice.reducer;
