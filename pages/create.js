import React, { Component } from "react";
import Axios from "axios";
import Router from "next/router";
import RockEditForm from "../src/components/RockEditForm";
import {BACKEND_URL} from "../src/config";

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
    Axios.post(`${BACKEND_URL}/api/rocks/`, rock).then(() =>
      Router.push("/")
    );
  }

  render() {
    return (
      <div className="container">
        <RockEditForm
          formTitle="Create Rock"
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
