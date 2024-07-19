
export const SUCCESS = '[Product] success'
export const FATLED = '[Product] failed'
export const LOAD = '[Product] load'

export class loadProductAction {
    type: string = LOAD
}

export class SuccessAction {
    type: string = SUCCESS
    payload: any 
    constructor(payloead:any ) {
        this.payload = payloead
    }
}
export class erorrAction {
    type: string = FATLED
    payload:any
    constructor(payloead:any ) {
        this.payload = payloead
    }
}