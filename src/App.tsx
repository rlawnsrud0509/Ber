import "./App.css";
import * as S from "./login/style";
import Email from "./resource/email.svg";
import Idcard from "./resource/idcard.svg";
import Key from "./resource/key.svg";
function App() {
  return (
    <>
      <S.loginForm>
        <S.Letter>Sign Up</S.Letter>

        <S.inputDiv height={31} width={59} top={20} left={21}>
          <S.accountTxt>
            <br />
            계정 정보
          </S.accountTxt>

          <S.formInput topIndex={1} placeholder="학교 이메일"></S.formInput>
          <S.IconDiv topIndex={1}>
            <S.Icons Name={Email}></S.Icons>
          </S.IconDiv>

          <S.formInput topIndex={2} placeholder="아이디"></S.formInput>
          <S.IconDiv topIndex={2}>
            <S.Icons Name={Idcard}></S.Icons>
          </S.IconDiv>

          <S.formInput topIndex={3} placeholder="비밀번호"></S.formInput>
          <S.IconDiv topIndex={3}>
            <S.Icons Name={Key}></S.Icons>
          </S.IconDiv>
        </S.inputDiv>

        <S.inputDiv height={12} width={55} top={67} left={21}>
          <S.accountTxt>
            <br />
            학생 정보
          </S.accountTxt>

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
