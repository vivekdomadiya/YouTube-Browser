import axios from "axios";

const KEY = "YOUR_KEY";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

instance.interceptors.request.use((config) => {
  config.params = {
    key: KEY,
    part: "snippet",
    type: "video",
    maxResults: 5,
    ...config.params,
  };
  return config;
});

export default instance;
