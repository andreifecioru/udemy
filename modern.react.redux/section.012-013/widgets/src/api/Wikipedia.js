import axios from "axios";

const WIKIPEDIA_ROOT_URL = "https://en.wikipedia.org/w/api.php";

const client = axios.create({
  baseURL: WIKIPEDIA_ROOT_URL,

  params: {
    action: "query",
    list: "search",
    format: "json",
    origin: "*",
  },
});

class Wikipedia {
  async search(term) {
    if (!term) return [];

    const response = await client.get("", {
      params: {
        srsearch: term,
      },
    });

    return response.data.query.search;
  }
}

export default Wikipedia;
