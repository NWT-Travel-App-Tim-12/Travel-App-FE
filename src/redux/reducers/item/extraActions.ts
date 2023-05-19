import { Draft, PayloadAction } from "@reduxjs/toolkit";
import { ItemStore } from "./interfaces";

export const getItemListPending = (state: Draft<ItemStore>) => {
  state.isLoading = true;
  state.error = null;
};
export const getItemListFulfilled = (
  state: Draft<ItemStore>,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.items = action.payload;
};
export const getItemListRejected = (
  state: Draft<ItemStore>,
  action: PayloadAction<any>
) => {
  state.isLoading = false;
  state.error = action.payload.error.message;
};
