import { Address } from "../../intefaces/address";

export interface RegisterRequest {
    username:   string;
    password:   string;
    email:      string;
    role:       string;
    first_name: string;
    last_name:  string;
    birth_date: Date;
    address:    Address;
} 
