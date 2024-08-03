import { CustomAction } from '../store';
import { SUCCESS, FATLED, LOAD } from '../Actions/product.action';
import {
  ActionReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';


export interface Product {
  id: string;
  ingredients:string
  name: string;
  price: number;
  category: string;
  img: string;
  rate: number;
  quantity:number
}
const initialState: Product[] = [];


const ProductReducer: ActionReducer<Product[], CustomAction> = (
  state: Product[] = initialState,
  action: CustomAction
): Product [] => {
  switch (action.type) {
    case LOAD:
      return action.payload
    case SUCCESS:
      return action.payload;
    case FATLED:
      return action.payload;
    default:
      return state;
  }
};


let productsFs = createFeatureSelector<Product>('products');
export let productsSelector = createSelector(productsFs, (state) => state);

export default ProductReducer;
