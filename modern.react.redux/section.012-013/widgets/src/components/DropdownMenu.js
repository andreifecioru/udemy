import React, { useCallback, useEffect, useRef, useState } from "react";

const dropdownClassNames = {
    dropdown: {closed: "ui selection dropdown", active: "ui selection dropdown visible active"},
    menu: {closed: "menu", active: "menu visible transition"},
};

const DropdownMenu = ({ label, options, selected, onChange }) => {
  const [ menuState, setMenuState ] = useState("closed");
  const menuRef = useRef();

  const toggleMenuState = useCallback(() => {
    setMenuState(menuState === "active" ? "closed" : "active");
  }, [menuState, setMenuState]);
    
  useEffect(() => {
    const onBodyClick = (event) => {
      // here we detect if we clicked somewhere inside the menu
      if (menuRef.current && menuRef.current.contains(event.target)) {
        return; // don't do anything if we clicked somewhere inside the menu
      }
      setMenuState("closed");
    };

    // NOTE: events added with JS are executed before any React event
    console.log("Installing listener...");
    document.body.addEventListener("click", onBodyClick);

    // Since this effect is only run the 1st render, its associated cleanup
    // is executed when the component is removed from the DOM 
    // (equivalent to componentDidUnmount callback)
    return () => {
      console.log("Uninstalling listener...");
      document.body.removeEventListener("click", onBodyClick);
    }
  }, []); // use `[]` here to make sure this is executed only on 1st render


  const onItemClick = (option) => {
    onChange(option);
  };

  const onMenuClick = (event) => {
    // NOTE: interfering with events is considered bad practice
    // because it may break other parts of the app.
    // event.stopPropagation();

    toggleMenuState();
  };

  const renderDropdownOptions = () => {
    return options
      .filter(option => option.id !== selected.id)
      .map((option) => {
        return (
          <div key={option.id} className="item" onClick={() => onItemClick(option)}>
            {option.label}
          </div >
        );
      });
  };

  return (
      <div className="ui form" ref={menuRef}>
        <div className="field">
          <label className="label">{label}</label>
          <div className={dropdownClassNames.dropdown[menuState]} onClick={onMenuClick}>
            <i className="dropdown icon" />
            <div className="text">{selected.label}</div>
            <div className={dropdownClassNames.menu[menuState]}>
              {renderDropdownOptions()}
            </div>
          </div>
        </div>
      </div>
  );
};

export default DropdownMenu;