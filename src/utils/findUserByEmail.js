import { users } from "../api/userData";

export function findUserByEmail(email){
    console.log("kitna",email);
    return users.find(obj=>obj.email === email);
}