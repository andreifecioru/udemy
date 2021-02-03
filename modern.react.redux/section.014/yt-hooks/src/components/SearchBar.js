import React, { useEffect, useState } from "react";

import "./SearchBar.css";

const DEBOUNCE_TIMEOUT = 1000;

const SearchBar = ({ onChange }) => {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  const onFormSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    onChange(text);
  };

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedText(text), DEBOUNCE_TIMEOUT);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    onChange(debouncedText);
  }, [debouncedText, onChange]);

  return (
    <form className="ui form search-bar" onSubmit={onFormSubmit}>
      <div className="field">
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
