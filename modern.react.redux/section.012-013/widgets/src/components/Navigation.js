import React from "react";

import Link from "./Link";

const Navigation = () => {
  return (
    <div className="ui tabular menu">
      <Link className="item" href="/">
        Accordion
      </Link>
      <Link className="item" href="/list">
        Search
      </Link>
      <Link className="item" href="/dropdown">
        Dropdown
      </Link>
      <Link className="item" href="/translate">
        Translate
      </Link>
    </div>
  );
};

export default Navigation;