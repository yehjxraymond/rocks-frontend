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

const inputContainerStyle = {
  maxWidth: 600,
  margin: "auto",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#95a5a6"
};

const inputFieldStyle = {
  width: "100%",
  border: 0,
  height: 40,
  background: "#ecf0f1",
  marginBottom: 5,
  padding: 5
};

const inputGroupStyle = {
  padding: 20,
  margin: 0
};

const buttonStyle = {
  border: "none",
  color: "#FFF",
  padding: 10
};

const RockEditForm = ({
  formTitle,
  handleSubmit,
  initialValues,
  handleDelete
}) => {
  return (
    <Formik
      onSubmit={handleSubmit}
      validate={validateForm}
      initialValues={initialValues}
    >
      {() => (
        <Form>
          <div style={inputContainerStyle}>
            <div
              className="row"
              style={{
                textAlign: "center",
                background: "#95a5a6",
                padding: 20,
                margin: 0
              }}
            >
              <h1 style={{ color: "#FFF", fontWeight: 900 }}>{formTitle}</h1>
            </div>
            <div className="row" style={inputGroupStyle}>
              <div className="col-4">Name:</div>
              <div className="col-8">
                <ErrorMessage name="name" />
                <Field style={inputFieldStyle} type="text" name="name" />
              </div>
            </div>

            <div className="row" style={inputGroupStyle}>
              <div className="col-4">Weight (kg):</div>
              <div className="col-8">
                <ErrorMessage name="weight" />
                <Field style={inputFieldStyle} type="text" name="weight" />
              </div>
            </div>

            <div className="row" style={inputGroupStyle}>
              <div className="col-4">Image (url):</div>
              <div className="col-8">
                <ErrorMessage name="image" />
                <Field style={inputFieldStyle} type="text" name="image" />
              </div>
            </div>

            <div className="row" style={inputGroupStyle}>
              <div className="col-4">Engraving:</div>
              <div className="col-8">
                <ErrorMessage name="engraving" />
                <Field style={inputFieldStyle} type="text" name="engraving" />
              </div>
            </div>

            <div className="row" style={inputGroupStyle}>
              <div className="col-4">Location:</div>
              <div className="col-8">
                <div>
                  <ErrorMessage name="lat" />
                  <Field
                    style={inputFieldStyle}
                    type="text"
                    name="lat"
                    placeholder="Latitude"
                  />
                </div>
                <div>
                  <ErrorMessage name="lng" />
                  <Field
                    style={inputFieldStyle}
                    type="text"
                    name="lng"
                    placeholder="Longitude"
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{ margin: 0 }}>
              {handleDelete && (
                <button
                  className="col"
                  onClick={() => handleDelete()}
                  style={{ ...buttonStyle, background: "#e74c3c" }}
                >
                  Delete
                </button>
              )}
              <button
                className="col"
                type="submit"
                style={{ ...buttonStyle, background: "#27ae60" }}
              >
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RockEditForm;
