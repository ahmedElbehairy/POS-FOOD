import { ActionReducerMap } from '@ngrx/store';
import ProductReducer, { Product } from './Reducers/product.reducer';

export interface StoreInterface {
  products: Product[];
}

export interface CustomAction {
  type: string;
  payload?: any;
}

export const reducers: ActionReducerMap<StoreInterface> = {
  products: ProductReducer,
};
