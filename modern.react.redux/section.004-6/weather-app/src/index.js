import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./components/SeasonDisplay";
import ErrorMessage from "./components/ErrorMessage";
import LoadingMessage from "./components/LoadingMessage";

const getCurrentSeason = (latitude) => {
  const currentMonth = new Date().getMonth();

  let currentSeason;
  if (latitude === null) {
    currentSeason = "unknown";
  }
  else if (currentMonth >= 2 && currentMonth < 9) {
    currentSeason = latitude >= 0 ? "summer" : "winter";
  } else {
    currentSeason = latitude >= 0 ? "winter" : "summer";
  }

  return currentSeason;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMsg: "",
    };

    this.getLocation();
  }

  getLocation() {
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

  render() {
    const currentSeason = getCurrentSeason(this.state.latitude);

    let content = <LoadingMessage text="Retrieving location info." />

    if (this.state.errorMsg) {
      content = <ErrorMessage title="Unable to retrieve location" text={this.state.errorMsg} />;
    } else if (this.state.latitude) {
      content = <SeasonDisplay season={currentSeason} />;
    }

    return (
      <div
        style={{
          margin: "20em 3em",
        }}
      >
        {content}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
