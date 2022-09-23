import styled from "styled-components";

interface TopIndex {
  topIndex: number;
}

interface Size {
  width: number;
  height: number;
  top: number;
  left: number;
}

export const accountTxt = styled.h1``;

export const Letter = styled.h1`
  font-family: "ULTRA";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 64px;
  color: white;
`;

export const formInput = styled.input`
  display: flex;
  position: absolute;
  width: 100%;
  height: 26%;
  margin: 5px auto;
  top: ${(props: TopIndex) => props.topIndex * 32}%;
  border: none;
  border-radius: 40px;
  ::placeholder {
    font-family: "Noto-Sans";
    font-size: 14px;
    margin-left: 10px;
  }
`;

export const infoInput = styled.input`
  width: 23%;
  height: 63%;
  border: none;
  border-radius: 20px;
  margin: 1%;
`;

export const inputDiv = styled.div`
  text-indent: 500px;
  display: flex;
  position: absolute;
  width: ${(props: Size) => props.width}%;
  height: ${(props: Size) => props.height}%;
  top: ${(props: Size) => props.top}%;
  left: ${(props: Size) => props.left}%;
  align-items: center;
  text-align: left;
  color: white;
`;

export const loginForm = styled.div`
  display: flex;
  width: 40%;
  height: 85%;
  top: 25%;
  left: 28%;
  position: absolute;
  box-sizing: border-box;
  background-color: #98adc7;
  color: black;
  border: none;
  border-radius: 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
`;

export const loginFormShadow = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  background-color: #494949;
  opacity: 0.7;
  filter: blur(50px);
  width: 36%;
  height: 75%;
  top: 36%;
  left: 33%;
`;
