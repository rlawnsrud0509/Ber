import "./App.css";
import * as S from "./loginSource/style";
import Email from "./resource/email.svg";
import Key from "./resource/key.svg";
import Check from "./resource/Check.svg";
import BerLogo from "./resource/berlogo.svg";

function Login() {
  return (
    <S.container>
      <S.loginForm>
        <S.berLogo
          width={30}
          height={22}
          top={-10}
          left={9}
          Name={BerLogo}
        ></S.berLogo>
        <S.Letter>Login</S.Letter>
        <S.formInput placeholder="학교 이메일"></S.formInput>
        <S.IconDiv left={18} top={1.1} width={7} height={11}>
          <S.Icons left={33} width={44} height={33} Name={Email}></S.Icons>
          <S.CheckIcons
            left={860}
            width={43}
            height={36}
            Name={Check}
          ></S.CheckIcons>
        </S.IconDiv>
        <S.formInput placeholder="비밀번호" type={"password"}></S.formInput>
        <S.IconDiv left={18} top={1.6} width={7} height={11}>
          <S.Icons left={33} width={44} height={33} Name={Key}></S.Icons>
          <S.CheckIcons
            left={860}
            width={43}
            height={36}
            Name={Check}
          ></S.CheckIcons>
        </S.IconDiv>
        <S.submitButton
          width={21}
          height={10}
          top={78}
          left={38}
          type={"submit"}
        >
          로그인
        </S.submitButton>
      </S.loginForm>
    </S.container>
  );
}

export default Login;
