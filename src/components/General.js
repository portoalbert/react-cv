import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      number: "",
      address: "",
      linkedin: "",
      title: "",
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
          <div className="generalpop">
            <div className="headerleft">
              <h2 id="nameMain">{this.state.name}</h2>
              <h3>{this.state.title}</h3>
              <h3>{this.state.linkedin}</h3>
            </div>
            <div className="headerright">
              <h3> {this.state.address} </h3>
              <h3> {this.state.email} </h3>
              <h3> {this.state.number} </h3>
            </div>
          </div>
        ) : (
          <div className="general">
            <h2>{this.props.maintitle}</h2>
            <div>
              <input
                type="text"
                placeholder={this.props.lineone}
                name="name"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
              <label htmlFor="name">{this.props.lineone}</label>
            </div>
            <div>
              <input
                type="text"
                placeholder={this.props.linetwo}
                name="title"
                onChange={(e) => {
                  this.setState({ title: e.target.value });
                }}
              />
              <label htmlFor="title">{this.props.linetwo}</label>
            </div>
            <div>
              <input
                type="text"
                placeholder={this.props.linethree}
                name="linkedin"
                onChange={(e) => {
                  this.setState({ linkedin: e.target.value });
                }}
              />
              <label htmlFor="linkedin"> {this.props.linethree} </label>
            </div>
            <div>
              <input
                type="text"
                placeholder={this.props.linefour}
                name="address"
                onChange={(e) => {
                  this.setState({ address: e.target.value });
                }}
              />
              <label htmlFor="address"> {this.props.linefour} </label>
            </div>
            <div>
              <input
                type="text"
                placeholder={this.props.linefive}
                name="email"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
              <label htmlFor="email"> {this.props.linefive}</label>
            </div>
            <div>
              <input
                type="number"
                placeholder={this.props.linesix}
                name="number"
                onChange={(e) => {
                  this.setState({ number: e.target.value });
                }}
              />
              <label htmlFor="number"> {this.props.linesix} </label>
            </div>
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default General;
