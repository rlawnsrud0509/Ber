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
`;

export const infoInput = styled.input`
  width: 23%;
  height: 63%;
  border: none;
  border-radius: 20px;
`;

export const inputDiv = styled.div`
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
  width: 46%;
  height: 85%;
  top: 25%;
  left: 26%;
  position: absolute;
  box-sizing: border-box;
  background-color: #98adc7;
  color: black;
  border: 1px solid black;
  border-radius: 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
`;
