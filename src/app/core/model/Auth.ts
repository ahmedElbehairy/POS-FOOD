export interface input {
  name: string;
  p_h: string;
  type: string;
  id: string;
  ngModul: string;
  icon: string;
  req:boolean;
  pattern:string
  errorPattern:string
}
export interface layOutOfPage {
  nameOfPage: string;
  titleOfPage: string;
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  buttonOfPage: string;
  buttonOfPage1?: string;
  routing: string;
  routing1?: string;
  routing2?: string;
}

export interface Forms {
  email: string;
  name:string
  img?:string
  password: string;
  Confirm_Password?: string;
  New_Password?: string;
}

export interface NewUser {
  name:string
  id:string;
  password:string;
  email:string;
  img?:string
}
