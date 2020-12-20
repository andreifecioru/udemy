import React from "react";

import ACCORDION_DATA from "../data/AccordionData";
import DROPDOWN_DATA from "../data/DropdownData";

import Route from "./Route";
import Navigation from "./Navigation";
import AccordionPannel from "./AccordionPannel";
import SearchPannel from "./SearchPannel";
import DropdownPannel from "./DropdownPannel";
import TranslatePanel from "./TranslatePannel";

const App = (props) => {
  return (
    <div className="ui container" style={{ marginTop: "2em" }}>
      <Navigation />

      <Route path="/">
        <AccordionPannel items={ACCORDION_DATA} />
      </Route>

      <Route path="/list">
        <SearchPannel />
      </Route>

      <Route path="/dropdown">
        <DropdownPannel options={DROPDOWN_DATA} />
      </Route>

      <Route path="/translate">
        <TranslatePanel />
      </Route>
    </div>
  );
};

export default App;
