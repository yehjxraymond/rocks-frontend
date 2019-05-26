import React, { Component } from "react";
import Axios from "axios";
import Router from "next/router";
import RockEditForm from "../src/components/RockEditForm";

class Page extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = { prevRock: null };
  }

  static getInitialProps({ query }) {
    return { id: query.id };
  }

  componentDidMount() {
    Axios.get(`http://localhost:8080/api/rocks/${this.props.id}`)
      .then(res => res.data)
      .then(rock => {
        this.setState({ prevRock: rock });
      });
  }

  handleDelete() {
    Axios.delete(`http://localhost:8080/api/rocks/${this.props.id}`).then(() =>
      Router.push("/")
    );
  }

  handleSubmit(val) {
    const { name, weight, image, engraving, lat, lng } = val;

    const rock = {
      name
    };
    rock.weight = Number(weight);
    if (image) rock.image = image;
    if (engraving) rock.engraving = engraving;
    if (lat && lng) rock.location = { lat: Number(lat), lng: Number(lng) };

    // Edit rock and redirect to home on success
    Axios.put(`http://localhost:8080/api/rocks/${this.props.id}`, rock).then(
      () => Router.push("/")
    );
  }

  render() {
    const { name, weight, image, engraving, location: { lat, lng } = {} } =
      this.state.prevRock || {};
    const rock = this.state.prevRock;
    return rock ? (
      <div className="container">
        <RockEditForm
          initialValues={{
            name,
            weight,
            image,
            engraving,
            lat,
            lng
          }}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
        />
      </div>
    ) : (
      "Loading"
    );
  }
}

export default Page;
