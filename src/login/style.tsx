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

interface IconName {
  Name: string;
}

export const Icons = styled.div`
  display: flex;
  position: absolute;
  width: 33%;
  height: 33%;
  top: 33%;
  left: 33%;
  background-image: url(${(props: IconName) => props.Name});
  background-size: cover;
  z-index: 1;
`;

export const IconDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  width: 15%;
  height: 27%;
  margin: 5px auto;
  top: ${(props: TopIndex) => props.topIndex * 32}%;
  left: 0%;
  border: none;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  font-family: "Noto-Sans";
  z-index: 1;
  background-color: white;
`;

export const accountTxt = styled.h1`
  width: 19%;
  top: -1%;
  left: 3%;
  display: flex;
  position: absolute;
  font-family: "Noto-Sans";
  font-weight: normal;
  font-size: 18px;
`;

export const Letter = styled.h1`
  font-family: "ULTRA";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 64px;
  color: white;
`;

export const formInput = styled.input`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  width: 85%;
  height: 27%;
  margin: 5px auto;
  top: ${(props: TopIndex) => props.topIndex * 32}%;
  left: 15%;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  z-index: 0;
  ::placeholder {
    font-family: "Noto-Sans";
    margin-left: 10px;
  }
  :focus {
    outline: none;
  }
`;

export const infoInput = styled.button`
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
