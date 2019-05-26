import React, { Component } from "react";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      weight: "",
      engraving: "",
      lat: "",
      lng: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { name, weight, engraving, lat, lng } = this.state;
    alert(
      JSON.stringify({
        name,
        weight,
        engraving,
        lat,
        lng
      })
    );
  }

  render() {
    const { name, weight, engraving, lat, lng } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={name}
              onChange={e => {
                this.setState({ name: e.target.value });
              }}
              placeholder="name"
            />
          </div>
          <div>
            <input
              type="text"
              value={weight}
              onChange={e => {
                this.setState({ weight: e.target.value });
              }}
              placeholder="weight"
            />
          </div>
          <div>
            <input
              type="text"
              value={engraving}
              onChange={e => {
                this.setState({ engraving: e.target.value });
              }}
              placeholder="engraving"
            />
          </div>
          <div>
            <input
              type="text"
              value={lat}
              onChange={e => {
                this.setState({ lat: e.target.value });
              }}
              placeholder="latitude"
            />
            <div />
            <input
              type="text"
              value={lng}
              onChange={e => {
                this.setState({ lng: e.target.value });
              }}
              placeholder="longitude"
            />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Page;
