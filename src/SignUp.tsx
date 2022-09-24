import "./App.css";
import * as S from "./login/style";
import Email from "./resource/email.svg";
import Idcard from "./resource/idcard.svg";
import Key from "./resource/key.svg";
import Check from "./resource/Check.svg";

function SignUp() {
  return (
    <>
      <S.loginForm width={45} height={100} top={20} left={28}>
        <S.Letter>Sign Up</S.Letter>

        <S.inputDiv height={31} width={59} top={13} left={21}>
          <S.accountTxt top={-1} left={3}>
            <br />
            계정 정보
          </S.accountTxt>

          <S.formInput topIndex={1} placeholder="학교 이메일"></S.formInput>
          <S.IconDiv topIndex={1}>
            <S.Icons Name={Email}></S.Icons>
            <S.CheckIcons Name={Check}></S.CheckIcons>
          </S.IconDiv>

          <S.formInput topIndex={2} placeholder="아이디"></S.formInput>
          <S.IconDiv topIndex={2}>
            <S.Icons Name={Idcard}></S.Icons>
            <S.CheckIcons Name={Check}></S.CheckIcons>
          </S.IconDiv>

          <S.formInput topIndex={3} placeholder="비밀번호"></S.formInput>
          <S.IconDiv topIndex={3}>
            <S.Icons Name={Key}></S.Icons>
            <S.CheckIcons Name={Check}></S.CheckIcons>
          </S.IconDiv>
        </S.inputDiv>

        <S.inputDiv height={12} width={55} top={58} left={21}>
          <S.accountTxt top={-65} left={3}>
            <br />
            학생 정보
          </S.accountTxt>
          <S.infoInput>
            <S.infoSelect disabled selected className="defaultValue">
              성별
            </S.infoSelect>
            <S.infoSelect>남자</S.infoSelect>
            <S.infoSelect>여자</S.infoSelect>
          </S.infoInput>
          <S.infoInput>
            <S.infoSelect disabled selected className="defaultValue">
              학년
            </S.infoSelect>
            <S.infoSelect>1학년</S.infoSelect>
            <S.infoSelect>2학년</S.infoSelect>
            <S.infoSelect>3학년</S.infoSelect>
          </S.infoInput>
          <S.infoInput>
            <S.infoSelect disabled selected className="defaultValue">
              반
            </S.infoSelect>
            <S.infoSelect>1반</S.infoSelect>
            <S.infoSelect>2반</S.infoSelect>
            <S.infoSelect>3반</S.infoSelect>
            <S.infoSelect>4반</S.infoSelect>
          </S.infoInput>
          <S.infoInput>
            <S.infoSelect disabled selected className="defaultValue">
              번호
            </S.infoSelect>
            <S.infoSelect>1번</S.infoSelect>
            <S.infoSelect>2번</S.infoSelect>
            <S.infoSelect>3번</S.infoSelect>
            <S.infoSelect>4번</S.infoSelect>
            <S.infoSelect>5번</S.infoSelect>
            <S.infoSelect>6번</S.infoSelect>
            <S.infoSelect>7번</S.infoSelect>
            <S.infoSelect>8번</S.infoSelect>
            <S.infoSelect>9번</S.infoSelect>
            <S.infoSelect>10번</S.infoSelect>
            <S.infoSelect>11번</S.infoSelect>
            <S.infoSelect>12번</S.infoSelect>
            <S.infoSelect>13번</S.infoSelect>
            <S.infoSelect>14번</S.infoSelect>
            <S.infoSelect>15번</S.infoSelect>
            <S.infoSelect>16번</S.infoSelect>
          </S.infoInput>
        </S.inputDiv>
      </S.loginForm>
      <S.loginFormShadow></S.loginFormShadow>
    </>
  );
}

export default SignUp;
