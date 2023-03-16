import axios from 'axios';

export default axios.create({
    baseURL: "https://randomuser.me",
    headers: {
      "Content-type": "application/json"
    }
});