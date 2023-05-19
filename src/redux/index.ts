import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlice from "./reducers/user/reducer";
import itemSlice from "./reducers/item/reducer";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    item: itemSlice.reducer,
  },
  middleware: [thunk],
});

export { store };
