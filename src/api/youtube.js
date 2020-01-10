import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 5,
    key: process.env.REACT_APP_API_KEY
  }
});
