import React, { Component } from "react";

import { Main } from "./Main";
import { Link } from 'react-router-dom';


export class Examples extends Component<{}, {}> {
  render() {
    return (
      <Main>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to="/weather?location=Bucharest">Bucharest, RO</Link>
          </li>
          <li>
            <Link to="/weather?location=Timisoara">Timisoara, RO</Link>
          </li>
        </ol>
      </Main>
    );
  }
}