import { Formik, Form, Field, ErrorMessage } from "formik";

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

const RockEditForm = ({ handleSubmit, initialValues, handleDelete }) => {
  return (
    <Formik
      onSubmit={handleSubmit}
      validate={validateForm}
      initialValues={initialValues}
    >
      {() => (
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
          {handleDelete && (
            <button onClick={() => handleDelete()}>Delete</button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RockEditForm;
