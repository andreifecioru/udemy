import React, { useEffect, useRef, useState } from "react";

import DropdownMenu from "./DropdownMenu";

const DropdownPannel = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropdown] = useState(true);
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.style.marginTop = "10em";
    textRef.current.style.fontWeight = "bold";
    textRef.current.style.color = selected.value;
  });

  const renderDropDown = () => {
    if (showDropDown) {
      return (
        <DropdownMenu
          label="Select a color"
          options={options}
          onChange={setSelected}
          selected={selected}
        />
      );
    }
    return null;
  };

  return (
    <div className="ui segment container">
      {renderDropDown()}

      <p ref={textRef}>You selected: {selected.label}</p>

      <button
        className="ui primary button"
        onClick={() => setShowDropdown(!showDropDown)}
      >
        Toggle dropdown
      </button>
    </div>
  );
};

export default DropdownPannel;
