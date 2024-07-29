export interface CustomerInput {
    InputText:text[]
    InputSelect:sleect[]
}


export interface Option {
    name:string
    id:number
}
export interface sleect {
    id:string
    ng_model:number
    placeHolder:string
    options:Option[]
    label:string
    errorMessage:string
}
interface text {
    id:string
    ng_model:string
    placeHolder:string
    label:string
    errorMessage:string
}

export interface OptionFilter {
    option:Option[]
}