import axios from "axios";

const API_KEY = "384301513b314a45ab2a4bec873d2054";

const instance = axios.create({
    baseURL: "https://newsapi.org/v2/"
});

instance.defaults.headers.common['Authorization'] = API_KEY;

export default instance;