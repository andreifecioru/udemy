import axios from "axios";

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const client = axios.create({
  baseURL: YOUTUBE_BASE_URL,
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: YOUTUBE_API_KEY
  }
});

class YouTube {
  async search(term) {
    if (!term) return [];

    const response = await client.get("/search", {
      params: {
        q: term
      }
    });

    return response.data.items.map((video) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.default,
    }));
  }
}

export default YouTube;