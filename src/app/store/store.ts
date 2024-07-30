import { ActionReducerMap } from '@ngrx/store';
import ProductReducer, { Product } from './Reducers/product.reducer';
import OrdersReducer, { Orders } from './Reducers/orders.reducer';

export interface StoreInterface {
  products: Product[];
  orders:Orders []
}

export interface CustomAction {
  type: string;
  payload?: any;
}

export const reducers: ActionReducerMap<StoreInterface> = {
  orders: OrdersReducer,
  products: ProductReducer,
};

