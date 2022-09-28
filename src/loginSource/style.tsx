import styled from "styled-components";
import "../App.css";

interface SizePosition {
  width: number;
  height: number;
  top: number;
  left: number;
}

interface IconName {
  Name: string;
  left: number;
}

interface Berlogo {
  width: number;
  height: number;
  top: number;
  left: number;
  Name: string;
}

interface txtPosition {
  top: number;
  left: number;
}

export const Icons = styled.div`
  display: flex;
  position: absolute;
  width: 33%;
  height: 33%;
  top: 33%;
  left: ${(props: IconName) => props.left}%;
  background-image: url(${(props: IconName) => props.Name});
  background-size: cover;
  z-index: 1;
`;

export const CheckIcons = styled.div`
  display: flex;
  position: absolute;
  width: 35%;
  height: 35%;
  top: 34%;
  left: ${(props: IconName) => props.left}%;
  background-image: url(${(props: IconName) => props.Name});
  background-size: cover;
  z-index: 3;
`;

export const IconDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  position: absolute;
  width: ${(props: SizePosition) => props.width}%;
  height: ${(props: SizePosition) => props.height}%;
  margin: 5px auto;
  top: ${(props: SizePosition) => props.top * 32}%;
  left: ${(props: SizePosition) => props.left}%;
  border: none;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  font-family: "Noto-Sans";
  z-index: 3;
  background-color: white;
`;

export const accountTxt = styled.h1`
  width: 19%;
  top: ${(props: txtPosition) => props.top}%;
  left: ${(props: txtPosition) => props.left}%;
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
  width: ${(props: SizePosition) => props.width}%;
  height: ${(props: SizePosition) => props.height}%;
  margin: 5px auto;
  top: ${(props: SizePosition) => props.top * 32}%;
  left: ${(props: SizePosition) => props.left}%;
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

export const infoSelect = styled.option`
  color: #777777;
  font-family: "Noto-Sans";
  font-size: 14px;
`;

export const infoInput = styled.select`
  width: 30%;
  height: 63%;
  border: none;
  border-radius: 20px;
  margin: 1%;
  color: black;
  font-family: "Noto-Sans";
  font-size: 16px;
  text-align: center;
  color: #777777;

  :hover {
    cursor: pointer;
  }
`;

export const submitButton = styled.button`
  width: ${(props: SizePosition) => props.width}%;
  height: ${(props: SizePosition) => props.height}%;
  top: ${(props: SizePosition) => props.top}%;
  left: ${(props: SizePosition) => props.left}%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  display: flex;
  font-family: "Noto-Sans";
  font-size: 15px;
  font-weight: bold;
  background-color: white;
  border: none;
  color: #777777;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;

  :hover {
    background-color: #a9bed8;
    cursor: pointer;
  }

  :active {
    transition-duration: 0s;
    background-color: #cfdcec;
  }
`;

export const inputDiv = styled.div`
  text-indent: 500px;
  display: flex;
  position: absolute;
  width: ${(props: SizePosition) => props.width}%;
  height: ${(props: SizePosition) => props.height}%;
  top: ${(props: SizePosition) => props.top}%;
  left: ${(props: SizePosition) => props.left}%;
  align-items: center;
  text-align: left;
  color: white;
`;

export const loginForm = styled.div`
  display: flex;
  width: ${(props: SizePosition) => props.width}%;
  height: ${(props: SizePosition) => props.height}%;
  top: ${(props: SizePosition) => props.top}%;
  left: ${(props: SizePosition) => props.left}%;
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
  filter: blur(50px); //36 75 36 33
  width: ${(props: SizePosition) => props.width}%;
  height: ${(props: SizePosition) => props.height}%;
  top: ${(props: SizePosition) => props.top}%;
  left: ${(props: SizePosition) => props.left}%;
`;

export const berLogo = styled.div`
  width: ${(props: Berlogo) => props.width}%;
  height: ${(props: Berlogo) => props.height}%;
  top: ${(props: Berlogo) => props.top}%;
  left: ${(props: Berlogo) => props.left}%;
  position: absolute;
  background-image: url(${(props: Berlogo) => props.Name});
  background-size: cover;
`;

export const DropBox = styled.button`
  position: relative;
  display: flex;
  width: 30%;
  height: 63%;
  border: none;
  border-radius: 20px;
  margin: 1%;
  background-color: white;
  font-family: "Noto-Sans";
  font-size: 16px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #777777;
  list-style: none;

  :hover {
    cursor: pointer;
  }
`;

export const DropBoxul = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  width: 100%;
  height: 170%;
  top: 110%;
  overflow: scroll;
  font-size: 0;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }

  :hover {
    cursor: default;
  }
`;

export const DropBoxli = styled.li`
  /* display: none; */
  border: none;
  background-color: white;
  color: black;
  border-radius: 10px;
  height: 25%;
  text-align: center;
  margin: 2px auto;
  font-size: 16px;
  transition-timing-function: ease-out;
  transition-duration: 0.15s;
  width: 100%;
  z-index: 1;

  :hover {
    background-color: #a9bed8;
    cursor: pointer;
  }

  :active {
    transition-duration: 0s;
    background-color: #cfdcec;
  }
`;
