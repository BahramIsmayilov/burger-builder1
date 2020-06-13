import axios from "axios";

const instance = axios.create({
 baseURL: "https://react-my-burger-a5b74.firebaseio.com/"
})

export default instance