import React, { useState } from "react";

const AccordionPannel = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onItemClick = item => {
    setActiveItem(item)
  }

  const isItemActive = (item) => activeItem && activeItem.id === item.id

  const renderedItems = items.map((item) => {
    return (
      // When we want to return multiple JSX element w/o wrapping them
      // in an enclosing div, we use a react fragment instead.
      <React.Fragment key={item.id}>
        <div 
          className={`title ${isItemActive(item) ? "active" : ""}`}
          onClick={() => onItemClick(item)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isItemActive(item) ? "active" : ""}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui container">
      <div className="ui styled accordion">{renderedItems}</div>
      <p>Active item: {activeItem ? activeItem.title : ""}</p>
    </div>
  );
};

export default AccordionPannel;
