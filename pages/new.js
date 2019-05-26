import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { addedNewRock } from "../src/reducers";
import Axios from "axios";
import Router from "next/router";

const validateForm = ({ name, weight, lat, lng }) => {
  const errors = {};
  if (!name) errors.name = "Required";
  if (!weight) errors.weight = "Required";
  if (Number(weight) === NaN) errors.weight = "Weight must be a number";
  if (lat && !(Number(lat) < 90 && Number(lat) > -90))
    errors.lat = "Latitude must be a number between -90 to 90";
  if (lng && !(Number(lng) < 180 && Number(lng) > -180))
    errors.lng = "Latitude must be a number between -180 to 180";
  if ((lat && !lng) || (!lat && lng)) {
    errors.lat = "Both latitutde and longitude must be present or absent";
    errors.lng = "Both latitutde and longitude must be present or absent";
  }
  return errors;
};

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
    Axios.post("http://localhost:8080/api/rocks/", rock)
      .then(res => res.data)
      .then(this.props.addedNewRock)
      .then(() => Router.push("/"));
  }

  render() {
    return (
      <div className="container">
        <Formik
          onSubmit={this.handleSubmit}
          validate={validateForm}
          initialValues={{
            name: "",
            weight: "",
            image: "",
            engraving: "",
            lat: "",
            lng: ""
          }}
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form>
              <div>
                <ErrorMessage name="name" />
                <Field type="text" name="name" placeholder="Name" />
              </div>
              <div>
                <ErrorMessage name="weight" />
                <Field type="text" name="weight" placeholder="Weight" />
              </div>
              <div>
                <ErrorMessage name="image" />
                <Field type="text" name="image" placeholder="Image" />
              </div>
              <div>
                <ErrorMessage name="engraving" />
                <Field type="text" name="engraving" placeholder="Engraving" />
              </div>
              <div>
                <ErrorMessage name="lat" />
                <Field type="text" name="lat" placeholder="Latitude" />
              </div>
              <div>
                <ErrorMessage name="lng" />
                <Field type="text" name="lng" placeholder="Longitude" />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  rocks: store.rocks
});

const mapDispatchToProps = dispatch => ({
  addedNewRock: payload => dispatch(addedNewRock(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
