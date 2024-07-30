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
    img:string
}
export interface NewOrder {
    idOfOrder:string
    itemOrder:ItemOrder[] 
    totalPrice:number
    countOfitem:number
}
export interface N_D_Customer {
    name:string
    id:number
}
export interface UpCoustomerToOrder {
    table:number
    idOfCoustomer:number
    Payment:string ,
    coustomerName:string
}
export interface newCustomer {
    Name_Customer:string
    Gender_Customer:number
    City_Customer:number
    Phone_Customer:number
    Email_Customer:string
    Id_Customer:number
    Address:string
    orderMaked:string
}