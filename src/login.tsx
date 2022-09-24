import "./App.css";
import * as S from "./login/style";
import Email from "./resource/email.svg";
import Idcard from "./resource/idcard.svg";
import Key from "./resource/key.svg";
import Check from "./resource/Check.svg";

function Login() {
  return (
    <>
      <S.loginForm width={45} height={59} top={25} left={27}></S.loginForm>
    </>
  );
}

export default Login;
