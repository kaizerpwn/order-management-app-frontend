import { User } from "../../core/intefaces/user";

export interface AppState {
    loggedUser: User | null;
}