import { connect } from "react-redux";

function Home({ rocks }) {
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

const mapStateToProps = store => ({
  rocks: store.rocks
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
