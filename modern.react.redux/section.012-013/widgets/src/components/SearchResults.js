import React from "react";

import "./SearchResults.css";

const SearchResults = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="right floated content">
          <a
            className="ui"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="linkify icon"></i>
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          <div
            className="description"
            // this is how we un-escaped (i.e. raw) HTML
            dangerouslySetInnerHTML={{ __html: item.snippet }}
          />
        </div>
      </div>
    );
  });

  return <div className="ui relaxed celled list">{renderedItems}</div>;
};

export default React.memo(SearchResults);
