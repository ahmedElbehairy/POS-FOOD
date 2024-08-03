export interface Order {
    id:string
    TotalPriceOfOrder:number
    orders:SendPro[]
}
export interface SendPro {
    name:string 
    totalPrice:number
    quantity:number
    img:string 
    amount:number
    id:string
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
    idOfCoustomer:string
    Paid:number
    Payment:number ,
    coustomerName:string
}
export interface newProduct {
    img: string;
    name:string
    price:number
    id:string
    quantity:number
    category:string
    rate: number;
}
export interface UpProduct {
    img?: string;
    name?:string
    price?:number
    id?:string
    quantity?:number
    category?:string
    rate?: number;
}
export interface newCustomer {
    Name_Customer:string
    Paid:number
    table:number
    Payment:number
    Gender_Customer:number
    City_Customer:number
    Phone_Customer:number
    Email_Customer:string
    Id_Customer:number
    Address:string
    orderMaked:string
}

export interface newCategory {
    name:string
    id:number
}