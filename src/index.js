import React from "react";
import ReactDOM from "react-dom";
import { Grid } from "react-bootstrap";

import Restaurant from "../src/components/Restaurant/Restaurant.jsx";
import FoodItem from "../src/components/FoodItem/FoodItem.jsx";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <Grid className="purchase-card">
        <Restaurant />
        <FoodItem />
      </Grid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
