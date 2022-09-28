import "./App.css";
import * as S from "./login/style";
import Email from "./resource/email.svg";
import Key from "./resource/key.svg";
import Check from "./resource/Check.svg";
import BerLogo from "./resource/berlogo.svg";

function Login() {
  return (
    <>
      <S.loginForm width={45} height={59} top={25} left={27}>
        <S.berLogo
          width={30}
          height={29}
          top={-13}
          left={8}
          Name={BerLogo}
        ></S.berLogo>
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
          type={"password"}
        ></S.formInput>
        <S.IconDiv left={18} top={1.7} width={7} height={11}>
          <S.Icons left={33} Name={Email}></S.Icons>
          <S.CheckIcons left={877} Name={Check}></S.CheckIcons>
        </S.IconDiv>
        <S.submitButton
          width={21}
          height={10}
          top={78}
          left={38}
          type={"submit"}
        >
          로그인하기
        </S.submitButton>
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
