import styled from "styled-components";
import "../App.css";

//스타일트컴포넌트 props 요소 가져오기 위해 선언

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

//메일, 키 같은 아이콘 넣을 div

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

//input태그 오른쪽 끝의 체크 아이콘

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

// 아이콘 div 넣어서 input이랑 연결할 div

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

//계정 정보, 학생 정보

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

// SIGN UP, LOGIN
export const Letter = styled.h1`
  font-family: "ULTRA";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 64px;
  color: white;
`;

// 아이디, 학교 이메일, 비번 작성할 input태그

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

//확인버튼
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
//요소 묶을 div 선언
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

//제일 외곽 div선언
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

//외곽div 그림자 선언
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

//로고 담을 div 선언
export const berLogo = styled.div`
  width: ${(props: Berlogo) => props.width}%;
  height: ${(props: Berlogo) => props.height}%;
  top: ${(props: Berlogo) => props.top}%;
  left: ${(props: Berlogo) => props.left}%;
  position: absolute;
  background-image: url(${(props: Berlogo) => props.Name});
  background-size: cover;
`;

//클릭 시 드롭박스 나타나게 할 버튼 선언
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

//리스트 형식으로 작성하기 때문에 드롭박스 ul선언
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

//ul요소 안에 들어갈 리스트 요소 선언
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
