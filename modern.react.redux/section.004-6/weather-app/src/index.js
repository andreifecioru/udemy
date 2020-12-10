import React from "react";
import ReactDOM from "react-dom";

import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from "./components/SeasonDisplay";
import ErrorMessage from "./components/ErrorMessage";
import Spinner from "./components/Spinner";


class App extends React.Component {
  // component state initialization
  // NOTE: this is effectively executed inside the constructor
  state = {
    latitude: null,
    errorMsg: "",
  };

  componentDidMount() {
    // external data-loading takes place in this life-cycle method.
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        console.error(error);
        this.setState({ errorMsg: error.message });
      }
    );
  }

  getContent() {
    let content = <Spinner text="Finding location..."/>;

    if (this.state.errorMsg) {
      content = (
        <ErrorMessage
          title="Unable to retrieve location"
          text={this.state.errorMsg}
        />
      );
    } else if (this.state.latitude) {
      content = <SeasonDisplay latitude={this.state.latitude} />;
    }

    return content;
  }

  render() {

    return (
      <div
        style={{
          margin: "20em 3em",
        }}
      >
        {this.getContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
