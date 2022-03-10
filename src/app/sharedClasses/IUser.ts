import { ICompany } from './ICompany';

import { IAddress } from './IAddress';

export interface IUser{
    id:number
    name:string
    username:string
    email:string
    img:string
    address:IAddress
    phone:string
    website:string
    company:ICompany
}