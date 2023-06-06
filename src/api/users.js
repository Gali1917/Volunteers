import axios from "axios";

export const postSignUpRequest = async (user) => {
    // return console.log(user);
    return await axios.post("/api/auth/signup", user);

}
