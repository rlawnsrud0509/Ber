import "./App.css";
import * as S from "./login/style";
import Email from "./resource/email.svg";
import Idcard from "./resource/idcard.svg";
import Key from "./resource/key.svg";
import Check from "./resource/Check.svg";

function Login() {
  return (
    <>
      <S.loginForm width={45} height={59} top={25} left={27}>
        <S.berLogo width={234} height={133} top={112} left={3}></S.berLogo>
        <S.Letter>Login</S.Letter>
        <S.formInput
          left={25}
          top={1.2}
          width={59}
          height={11}
          placeholder="학교 이메일"
        ></S.formInput>
        <S.IconDiv left={18} top={1.2} width={7} height={11}>
          <S.Icons left={33} Name={Email}></S.Icons>
          <S.CheckIcons left={877} Name={Check}></S.CheckIcons>
        </S.IconDiv>

        <S.formInput
          left={25}
          top={1.7}
          width={59}
          height={11}
          placeholder="비밀번호"
        ></S.formInput>
        <S.IconDiv left={18} top={1.7} width={7} height={11}>
          <S.Icons left={33} Name={Email}></S.Icons>
          <S.CheckIcons left={877} Name={Check}></S.CheckIcons>
        </S.IconDiv>
      </S.loginForm>
      <S.loginFormShadow
        left={29}
        top={30}
        width={45}
        height={59}
      ></S.loginFormShadow>
    </>
  );
}

export default Login;
