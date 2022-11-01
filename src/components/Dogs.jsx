import React from "react";
import DogImg from "./DogImg";
import axios from "axios";
import * as S from "./Style/Style";

class Dogs extends React.Component {
  constructor() {
    super();
    this.state = {
      breed: "",
      urls: [],
      num: 32,
      breeds: []
    };
  }
  componentDidMount() {
    this.getRandomDog(32);
    this.allOptions();
  }

  componentDidUpdate(prop, state) {
    if (state.breed !== this.state.breed) {
      this.getRandomDog();
    }
  }

  getRandomDog = () => {
    const { breed } = this.state;
    const breedInfo = breed.length > 0 ? "/" + breed : "s";
    axios
      .get(
        `https://dog.ceo/api/breed${breedInfo}/image${
          breed.length ? "s" : ""
        }/random/${this.state.num}`
      )
      .then((res) => {
        this.setState({ ...this.state, urls: [...res.data.message] });
      })
      .catch((err) => console.log(err));
  };

  allOptions = () => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {
        this.setState({
          ...this.state,
          breeds: Object.keys(res.data.message)
        });
      })
      .catch((err) => console.log(err));
  };

  handleChange = (x) => {
    this.setState({
      ...this.state,
      breed: x.target.value
    });
  };

  render() {
    const dogs = this.state.urls.map((url, i) => {
      return <DogImg url={url} counter={i} />;
    });
    const breeds = this.state.breeds.map((breed) => (
      <option value={breed}>{breed}</option>
    ));
    return (
      <S.Container>
        <select
          name="breed"
          id="breed"
          onChange={this.handleChange}
          value={this.state.breed}
        >
          <option value="Select Breed" disabled={true} selected={true}>
            Selecione uma Raça
          </option>
          {breeds}
        </select>
        <S.Options onClick={() => this.getRandomDog()}>
          Doguinhos Aleatorios
        </S.Options>
        <br />
        <S.ContainerImage>{dogs}</S.ContainerImage>
      </S.Container>
    );
  }
}

export default Dogs;
