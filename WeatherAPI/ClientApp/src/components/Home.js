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
        <center>
          <h1>Weather</h1>
          <h4>City</h4>
          <p>{this.state.city}</p>
          <h4>Temperature</h4>
          <p> {this.state.temp}</p>
          <h4>Description</h4>
          <p> {this.state.summary}</p>
        </center>
      </div>
    );
  }
}
