import React, { Component } from "react";
const PokeAPI =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export default class Pokecard extends Component {
  render() {
    let imgSrc = `${PokeAPI}/${this.props.id}.png`;
    return (
      <div className="pokecard" key={this.props.name}>
        <img src={imgSrc} alt={this.props.name} />
        <div className="pokecardDetail">
          <h2>{this.props.name}</h2>
          <p>Type: {this.props.type}</p>
          <p>Experience: {this.props.exp}</p>
        </div>
      </div>
    );
  }
}
