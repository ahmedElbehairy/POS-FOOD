export const SUCCESS = '[orderst] success'
export const FATLED = '[orderst] failed'
export const LOAD = '[orderst] load'

export class loadorderstAction {
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