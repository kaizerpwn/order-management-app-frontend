import { Address } from "./address";

export interface User {
    id?:        number;
    username:   string;
    email:      string;
    role:       string;
    first_name: string;
    last_name:  string;
    birth_date: Date;
    address:    Address;
} 
