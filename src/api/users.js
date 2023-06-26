import axios from "axios";

export const postSignUpRequest = async (user) => {
    // return console.log(user);
    return await axios.post("/api/auth/signup", user);

}

export const postSignInRequest = async (user) => {
    
    return await axios.post("/api/auth/signin", user);

}