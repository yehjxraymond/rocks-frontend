import React, { Component } from "react";
import Axios from "axios";
import Router from "next/router";

class Page extends Component {
  constructor(props) {
    super(props);
    this.loadRocks = this.loadRocks.bind(this);
    this.state = {
      rocks: []
    };
  }

  componentDidMount() {
    this.loadRocks();
  }

  loadRocks() {
    Axios.get("http://localhost:8080/api/rocks")
      .then(res => res.data)
      .then(rocks => this.setState({ rocks }));
  }

  render() {
    const { rocks } = this.state;
    const renderedRocks = rocks.map((r, i) => (
      <div
        key={i}
        className="col-4"
        onClick={() => Router.push(`/edit?id=${r.id}`)}
      >
        {r.image && <img src={r.image} style={{ width: "100%" }} />}
        <div className="h3">{r.name}</div>
        <div>Weight: {r.weight}</div>
        {r.engraving && <div>Engraving: {r.engraving}</div>}
        {r.location && <div>Lat: {r.location.lat}</div>}
        {r.location && <div>Lng: {r.location.lng}</div>}
      </div>
    ));
    return (
      <div className="container">
        <div className="row">{renderedRocks}</div>
      </div>
    );
  }
}

export default Page;
