import React from "react";
import styled from "styled-components";
import "./App.css";
import * as S from "./login/style";
function App() {
  return (
    <>
      <S.loginForm>
        <S.Letter>Sign Up</S.Letter>
        <S.inputDiv height={31} width={59} top={20} left={21}>
          <h4>계정 정보</h4>
          <S.formInput topIndex={1} placeholder="학교 이메일"></S.formInput>
          <S.formInput topIndex={2} placeholder="아이디"></S.formInput>
          <S.formInput topIndex={3} placeholder="비밀번호"></S.formInput>
        </S.inputDiv>
        <S.inputDiv height={12} width={55} top={67} left={21}>
          <S.infoInput placeholder="학년"></S.infoInput>
          <S.infoInput placeholder="반"></S.infoInput>
          <S.infoInput placeholder="번호"></S.infoInput>
        </S.inputDiv>
      </S.loginForm>
      <S.loginFormShadow></S.loginFormShadow>
    </>
  );
}

export default App;
