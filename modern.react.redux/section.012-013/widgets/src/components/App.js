import React from "react";

// import ACCORDION_DATA from "../data/AccordionData";
// import DROPDOWN_DATA from "../data/DropdownData";

// import AccordionPannel from "./AccordionPannel";
// import SearchPannel from "./SearchPannel";
// import DropdownPannel from "./DropdownPannel";
import TranslatePanel from "./TranslatePannel";

const App = props => {
  return(
    <div className="ui container">
      {/* <Accordion items={ACCORDION_DATA}/> */}
      {/* <SearchPannel /> */}
      {/* <DropdownPannel options={DROPDOWN_DATA}/> */}
      <TranslatePanel />
    </div>
  );
}

export default App;