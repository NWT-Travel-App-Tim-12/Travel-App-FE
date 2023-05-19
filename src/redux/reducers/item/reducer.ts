import { createSlice } from "@reduxjs/toolkit";
import { getItemList } from "./actions";
import { ItemStore } from "./interfaces";
import {
  getItemListFulfilled,
  getItemListPending,
  getItemListRejected,
} from "./extraActions";

const initialState = {
  items: [],
  isLoading: false,
  error: "",
} as ItemStore;

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItemList.pending, getItemListPending);
    builder.addCase(getItemList.fulfilled, getItemListFulfilled);
    builder.addCase(getItemList.rejected, getItemListRejected);
  },
});

export { getItemList };

export default itemSlice;
