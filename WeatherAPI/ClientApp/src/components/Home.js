import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: "", summary: "", city: "" };

    fetch("api/weather/city/london/")
      .then(response => response.json())
      .then(data =>
        this.setState({
          temp: data.temp,
          summary: data.summary,
          city: data.city
        })
      );
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        <p>City: {this.state.city}</p>
        <p>Temperature: {this.state.temp}</p>
        <p>Description: {this.state.summary}</p>
      </div>
    );
  }
}
