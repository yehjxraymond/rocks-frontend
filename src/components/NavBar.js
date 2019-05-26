const linkStyle = { textDecoration: "none", color: "#2c3e50" };

const NavBar = () => {
  return (
    <div style={{ background: "#ecf0f1", padding: 10, marginBottom: 40 }}>
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <a href="/" style={linkStyle}>
            <img
              style={{ maxWidth: 80 }}
              src="https://cdn.pixabay.com/photo/2014/12/22/00/01/rock-576615_960_720.png"
            />{" "}
            ROCKS.SG
          </a>
        </div>
        <div>
          <a href="/create" style={linkStyle}>
            Create Rock
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
