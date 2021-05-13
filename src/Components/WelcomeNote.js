import { findUserByEmail } from "../utils/findUserByEmail";
export function WelcomeNote(email){
    console.log(email.email)
    const user = findUserByEmail(email.email);
    return <h4>Hi,{user.name}</h4>
}