import React from "react";
import * as S from "./Style/Style";

function DogImg(props) {
  return (
    <S.Image>
      <img src={props.url} key={props.counter} alt="dog" />
    </S.Image>
  );
}

export default DogImg;
