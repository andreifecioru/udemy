import axios from "axios";

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;


const YouTube = axios.create({
  baseURL: YOUTUBE_BASE_URL,

  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: YOUTUBE_API_KEY,
  },
});

export default YouTube;