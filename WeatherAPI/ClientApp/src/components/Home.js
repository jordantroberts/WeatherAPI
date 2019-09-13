import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: "", summary: "", city: "", location: "London" };
  }

    getData(e) {
        e.preventDefault()
    fetch("api/weather/city/" + (this.state.location))
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
          <p>Please enter your city:</p>
          <form onSubmit={(e) => this.getData(e)}>
            <input
              type="text"
              placeholder="Type city here..."
              value={this.state.location}
              onChange={e => this.setState({ location: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
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
