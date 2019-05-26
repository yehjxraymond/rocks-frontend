import React, { Component } from "react";
import Axios from "axios";
import Router from "next/router";
import RockEditForm from "../src/components/RockEditForm";

class Page extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    // Post new rock and redirect to home on success
    Axios.post("http://localhost:8080/api/rocks/", rock).then(() =>
      Router.push("/")
    );
  }

  render() {
    return (
      <div className="container">
        <RockEditForm
          initialValues={{
            name: "",
            weight: "",
            image: "",
            engraving: "",
            lat: "",
            lng: ""
          }}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Page;
