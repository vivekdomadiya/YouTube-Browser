import axios from "axios";
const KEY = "AIzaSyAMDIki8bnbhb4Fmse9KjLjMaL7DFvmomg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
