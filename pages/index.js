const rocks = [
  {
    name: "Andesite",
    image:
      "https://mineralseducationcoalition.org/wp-content/uploads/andesite_366069737.jpg",
    weight: 13.5,
    engraving: "I'm made of Andesite",
    location: {
      lat: 1.336876,
      lng: 103.710109
    }
  },
  {
    name: "Diorite",
    weight: 0.15,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81TVw5AlEkL._SX425_.jpg",
    engraving: "I'm made of Diorite",
    location: {
      lat: 1.330276,
      lng: 103.752822
    }
  },
  {
    name: "Obsidian",
    weight: 3.25,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61Fk1UKrbcL._SX425_.jpg",
    engraving: "I'm made of Obsidian",
    location: {
      lat: 1.385251,
      lng: 103.849702
    }
  }
];

function Home() {
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

export default Home;
