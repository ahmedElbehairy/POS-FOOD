
import { CustomAction } from '../store';
import { SUCCESS, FATLED, LOAD } from '../Actions/orders.action';
import {
  ActionReducer,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';


export interface Orders {
    idOfOrder:string
    dataOfCoustomer:dataOfCoustomer
    itemOrder:ItemOrder[] 
    totalPrice:number
    countOfitem:number
    idOfCoustomer:string
    table:number 
    Paid:number
    Payment:string
}
export interface ItemOrder {
    name:string
    price:number
    amount:number
    img:string
}
export interface dataOfCoustomer {
  table:number
  idOfCoustomer:number
  Payment:string ,
  coustomerName:string
  Paid:number
}
const initialState: Orders[] = [];


const OrdersReducer: ActionReducer<Orders[], CustomAction> = (
  state: Orders[] = initialState,
  action: CustomAction
): Orders [] => {
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

let ordersFs = createFeatureSelector<Orders>('orders');
export let ordersSelector = createSelector(ordersFs, (state) => state);

export default OrdersReducer;
