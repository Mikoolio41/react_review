import React, { Component } from "react";

export class Actors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      image: "",
    };
  }
  render(props) {
    return props.actors.map((actor) => (
      <form>
        <ul key={actor.id}>
          <li>{actor.name}</li>
          <li>{actor.lname}</li>
          <img
            style={{ width: "250px", height: "250px" }}
            src={actor.img}
            alt=""
          ></img>
        </ul>
      </form>
    ));
  }
}

export default Actors;
