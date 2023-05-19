import { CartStore } from "./reducers/cart/interfaces.d";
import { UserStore } from "./reducers/user/interfaces";
import { ItemState } from "./reducers/item/interfaces";

export interface ReduxStore {
  user: UserStore;
  cart: CartStore;
  item: ItemStore;
}
