import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";

import Comments from "./components/comments/Comments";

function getAvatar() {
  // this helps us avoid image caching
  return `${faker.image.people()}?random=${Math.random()}`;
}

const comments = [
  {
    author: faker.name.firstName(),
    avatar: getAvatar(),
    date: "Today @ 6:00PM",
    text: faker.lorem.sentence(),
  },
  {
    author: faker.name.firstName(),
    avatar: getAvatar(),
    date: "Today @ 6:00PM",
    text: faker.lorem.sentence(),
  },
  {
    author: faker.name.firstName(),
    avatar: getAvatar(),
    date: "Today @ 6:00PM",
    text: faker.lorem.sentence(),
  },
];

const App = () => {
  return (
    <div style={{
      margin: "2em"
    }}>
      <Comments entries={comments} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
