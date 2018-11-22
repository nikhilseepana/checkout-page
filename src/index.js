import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col } from "react-bootstrap";

import "./styles.css";

function App() {
  return (
    <div className="Container">
      <Grid className="" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
