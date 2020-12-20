import React, { useEffect, useState } from "react";

import LANGUAGE_OPTIONS from "../data/TranslateData";
import DropdownMenu from "./DropdownMenu";
import TranslateInput from "./TranslateInput";
import GoogleTranslate from "../api/GoogleTranslate";

const TranslatePanel = (props) => {
  const [language, setLanguage] = useState(LANGUAGE_OPTIONS[0]);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    (async (text) => {
      const client = new GoogleTranslate();

      setTranslatedText(await client.translate(inputText, language.value));
    })(inputText)
  }, [inputText, language]);

  return (
    <div className="ui segment container">
      <TranslateInput
        text={inputText}
        onSubmit={setInputText}/>

      <div style={{ width: "100%", height: "2em" }}></div>

      <DropdownMenu 
        label="Select a language"
        options={LANGUAGE_OPTIONS}
        selected={language}
        onChange={setLanguage} />

      <div className="ui horizontal divider">
        Translation
      </div>
      <p>{translatedText}</p>
    </div>
  );

};

export default TranslatePanel;