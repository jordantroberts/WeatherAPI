import React, { Component } from "react";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      temp_min: "",
      temp_max: "",
      summary: "",
      city: "",
      location: ""
    };
  }

  getData(e) {
    e.preventDefault();
      fetch("api/weather/city/" + this.state.location )
      .then(response => response.json())
      .then(data =>
        this.setState({
          temp: data.temp,
          temp_min: data.temp_Min,
          temp_max: data.temp_Max,
          summary: data.summary,
          city: data.city
        })
      );
  }

  render() {
    let decision = "";
    if (Math.floor(this.state.temp) > 18.0) {
      decision = "Yes! Go get those arms out!";
    } else if (this.state.temp == "") {
      decision = "";
    } else {
      decision = "No way, you don't want to catch a cold!";
    }

    return (
      <div>
        <center>
          <h1>Weather</h1>
          <p>Please enter your city:</p>
          <form
            onSubmit={e => {
              this.getData(e);
            }}
          >
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
          <p>Current: {this.state.temp}</p>
           <p>Minimum: {this.state.temp_min}</p>
           <p>Maximum: {this.state.temp_max}</p>
          <h4>Description</h4>
          <p> {this.state.summary}</p>
          <h4>Is it T-Shirt weather?</h4>
          <p>{decision}</p>
        </center>
      </div>
    );
  }
}
