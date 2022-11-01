import styled from "styled-components";

export const Image = styled.div`
  img {
    width: 10rem;
    height: 10rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    border-radius: 20px;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 10vw;
  text-align: center;
  color: #ffffff;
  padding-top: 5%;
  padding-bottom: 5%;
  -webkit-text-stroke: 1px black;
`;

export const Options = styled.button`
  text-align: center;
  background: #ffffff;
  border: none;
  font-size: 1.5rem;
`;

export const Container = styled.div`
  text-align: center;

  select {
    font-size: 1.5rem;
  }

  button {
    margin-bottom: 10%;
  }
`;
