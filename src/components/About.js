import React, { Component } from "react";

class About extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      isSubmitted: false,
    };
  }
  handleSubmit = () => {
    this.setState({
      isSubmitted: true,
    });
  };
  render() {
    return (
      <div>
        {this.state.isSubmitted ? (
          <div className="aboutpop">
            <h2>About me</h2>
            <h3> {this.state.text} </h3>
          </div>
        ) : (
          <div className="about">
            <textarea
              rows="4"
              name="about"
              onChange={(e) => {
                this.setState({ text: e.target.value });
              }}
            />
            <label htmlFor="about">Write about yourself</label>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default About;
