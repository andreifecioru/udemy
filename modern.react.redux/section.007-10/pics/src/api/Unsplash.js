import axios from "axios";

const UNSPLASH_ROOT_URL = "https://api.unsplash.com";

// This is defined in the `.env` file in the root of the project
const UNSPLASH_API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY

const client = axios.create({
  baseURL: UNSPLASH_ROOT_URL,

  headers: {
    Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
  },

});

export default client;