import React, { Component } from "react";
import Axios from "axios";
import Router from "next/router";
import { BACKEND_URL } from "../src/config";

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
    Axios.get(`${BACKEND_URL}/api/rocks`)
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
        <div
          style={{
            width: "100%",
            height: 300,
            backgroundImage: `url(${r.image})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div
          style={{
            backgroundColor: "rgba(52,73,94,0.3)",
            width: "100%",
            padding: 10
          }}
        >
          <div className="h3">{r.name}</div>
          <div>Weight: {r.weight}</div>
          {r.engraving && <div>Engraving: {r.engraving}</div>}
          {r.location && <div>Lat: {r.location.lat}</div>}
          {r.location && <div>Lng: {r.location.lng}</div>}
        </div>
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
