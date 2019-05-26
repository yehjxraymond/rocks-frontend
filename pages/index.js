import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { loadedRocks } from "../src/reducers";

class Page extends Component {
  constructor(props){
    super(props);
    this.loadRocks = this.loadRocks.bind(this);
  }

  componentDidMount() {
    this.loadRocks();
  }

  loadRocks() {
    Axios.get("http://localhost:8080/api/rocks")
      .then(res => res.data)
      .then(this.props.loadedRocks);
  }

  render() {
    const { rocks } = this.props;
    const renderedRocks = rocks.map((r, i) => (
      <div key={i} className="col-4">
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

const mapStateToProps = store => ({
  rocks: store.rocks
});

const mapDispatchToProps = dispatch => ({
  loadedRocks: rocks => dispatch(loadedRocks(rocks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
