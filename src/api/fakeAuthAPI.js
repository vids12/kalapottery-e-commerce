import { WelcomeNote } from "../Components/WelcomeNote";
import { findUserByEmail } from "../utils/findUserByEmail";

export const fakeAuthApi = (email,password) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user = findUserByEmail(email);
            if(password === user.password){
                resolve({success:true,status:200});
            }
            reject({success:false,status:401});
        },3000)
    })
}