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
        <S.berLogo top={106} left={13} width={234} height={133}></S.berLogo>
        <S.inputDiv height={31} width={59} top={13} left={21}>
          <S.accountTxt top={-1} left={3}>
            <br />
            계정 정보
          </S.accountTxt>

          <S.formInput
            left={15}
            top={1}
            width={85}
            height={27}
            placeholder="학교 이메일"
          ></S.formInput>
          <S.IconDiv left={0} top={1} width={15} height={27}>
            <S.Icons left={33} Name={Email}></S.Icons>
            <S.CheckIcons left={600} Name={Check}></S.CheckIcons>
          </S.IconDiv>

          <S.formInput
            left={15}
            top={2}
            width={85}
            height={27}
            placeholder="아이디"
          ></S.formInput>
          <S.IconDiv left={0} top={2} width={15} height={27}>
            <S.Icons left={33} Name={Idcard}></S.Icons>
            <S.CheckIcons left={600} Name={Check}></S.CheckIcons>
          </S.IconDiv>

          <S.formInput
            left={15}
            top={3}
            width={85}
            height={27}
            placeholder="비밀번호"
          ></S.formInput>
          <S.IconDiv left={0} top={3} width={15} height={27}>
            <S.Icons left={33} Name={Key}></S.Icons>
            <S.CheckIcons left={600} Name={Check}></S.CheckIcons>
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
      <S.loginFormShadow
        left={36}
        top={75}
        width={36}
        height={73}
      ></S.loginFormShadow>
    </>
  );
}

export default SignUp;
