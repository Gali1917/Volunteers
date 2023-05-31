import axios from "axios";

export const postSignupRequest = async (user) => {
    return await axios.post("/api/auth/signup", user);
}