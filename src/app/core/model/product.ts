export interface Order {
    id:string
    TotalPriceOfOrder:number
    orders:SendPro[]
}
export interface SendPro {
    name:string 
    totalPrice:number
    img:string 
    amount:number
    price:number
}
export interface ItemOrder {
    name:string
    price:number
    amount:number
}
export interface NewOrder {
    idOfOrder:string
    itemOrder:ItemOrder[] 
    totalPrice:number
    countOfitem:number
}