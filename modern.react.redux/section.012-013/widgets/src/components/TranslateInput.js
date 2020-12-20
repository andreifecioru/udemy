import React, { useEffect, useState } from "react";

const DEBOUCE_TIMEOUT = 1000;

const TranslateInput = ({text, onSubmit}) => {
  const [inputText, setInputText] = useState(text);
  const [inputTextDebounced, setInputTextDebounced] = useState(inputText);

  const onFormSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    onSubmit(inputText);
  }

  useEffect(() => {
    const debounceTimeout = setTimeout(() =>{
      setInputTextDebounced(inputText);
    }, DEBOUCE_TIMEOUT);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [inputText]);

  useEffect(() => {
    console.log(`Debounced input: ${inputTextDebounced}`);
    onSubmit(inputTextDebounced);
  }, [inputTextDebounced, onSubmit]);

  return (
    <form className="ui form" onSubmit={onFormSubmit}>
      <div className="field">
        <label htmlFor="translate-input">Input text (in English)</label>
        <input
          id="translate-input"
          name="translate-input"
          type="text"
          placeholder="english text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
    </form>
  );
};

export default TranslateInput;
