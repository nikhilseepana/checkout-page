import React, { Component } from "react";
import { Media } from "react-bootstrap";
import "./Restaurant.css";

export default class Restaurant extends Component {
  render() {
    return (
      <Media>
        <Media.Left>
          <img
            width={60}
            height={60}
            src='https://b.zmtcdn.com/data/pictures/chains/4/59744/e56de37d5c17dec8c8dab6a7fc71c501.jpg?resize=1211%3A809&amp;crop=1200%3A464%3B4%2C260"'
            alt="thumbnail"
          />
        </Media.Left>
        <Media.Body className="font">
          <Media.Heading>Barebones - The Balcony Bar</Media.Heading>
          <p>Indiranagar · Bar, Casual Dining</p>
        </Media.Body>
      </Media>
    );
  }
}
