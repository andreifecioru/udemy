import axios from "axios";

const GOOGLE_TRANSLATE_API_KEY = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;
const GOOGLE_TRANSLATE_BASE_URL = "https://translation.googleapis.com/language";

const client = axios.create({
  baseURL: GOOGLE_TRANSLATE_BASE_URL,
  params: {
    key: GOOGLE_TRANSLATE_API_KEY,
  },
});

class GoogleTranslate {
  async translate(inputText, language) {
    if (inputText) {
      const response = await client.post(
        "/translate/v2",
        {}, // this object is where the POST request body is set
        {
          // this is where we set the query params
          params: {
            q: inputText,
            target: language,
          },
        }
      );

      return response.data.data.translations[0].translatedText;
    }

    return "";
  }
}

export default GoogleTranslate;
