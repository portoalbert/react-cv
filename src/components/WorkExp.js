import React, { Component } from "react";

class WorkExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
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
          <div className="workexppop">
            <h2 id="titlework"> {this.props.titletop} </h2>
            <h2 id="workh2"> {this.state.title}</h2>
            <h3 id="workh3"> {this.state.text} </h3>
          </div>
        ) : (
          <div id="workexp">
            <input
              type="text"
              name="jobtitle"
              placeholder="Job Title/Company"
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            />
            <label htmlFor="jobtitle">Job Title/Company</label>
            <textarea
              name="jobone"
              id=""
              cols="30"
              rows="10"
              placeholder="Summary of your role"
              onChange={(e) => {
                this.setState({ text: e.target.value });
              }}
            ></textarea>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default WorkExp;
