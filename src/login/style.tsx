import styled from "styled-components";
import { isPropertySignature } from "typescript";

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
  width: 33%;
  height: 33%;
  top: 33%;
  left: ${(props: IconName) => props.left}%;
  background-image: url(${(props: IconName) => props.Name});
  background-size: cover;
  z-index: 1;
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
  z-index: 1;
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
  width: ${(props: SizePosition) => props.width}px;
  height: ${(props: SizePosition) => props.height}px;
  top: ${(props: SizePosition) => props.top}%;
  left: ${(props: SizePosition) => props.left}%;
  position: absolute;
  display: flex;
  background-image: url("../resource/Ber_Logo.svg");
  background-size: cover;
  background-color: black;
`;
