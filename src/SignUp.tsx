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
        <S.berLogo top={-8} left={13} width={31} height={16}>
          Ber Logo
        </S.berLogo>
        <S.Letter>Sign Up</S.Letter>

        <S.inputDiv height={29} width={59} top={13} left={21}>
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

        <S.inputDiv height={12} width={55} top={55} left={21}>
          <S.accountTxt top={-65} left={3}>
            <br />
            학생 정보
          </S.accountTxt>
          <S.DropBox>
            성별
            <S.DropBoxul>
              <S.DropBoxli>남자</S.DropBoxli>
              <S.DropBoxli>여자</S.DropBoxli>
            </S.DropBoxul>
          </S.DropBox>
          <S.DropBox>
            학년
            <S.DropBoxul>
              <S.DropBoxli>1학년</S.DropBoxli>
              <S.DropBoxli>2학년</S.DropBoxli>
              <S.DropBoxli>3학년</S.DropBoxli>
            </S.DropBoxul>
          </S.DropBox>
          <S.DropBox>
            반
            <S.DropBoxul>
              <S.DropBoxli>1반</S.DropBoxli>
              <S.DropBoxli>2반</S.DropBoxli>
              <S.DropBoxli>3반</S.DropBoxli>
              <S.DropBoxli>4반</S.DropBoxli>
            </S.DropBoxul>
          </S.DropBox>
          <S.DropBox>
            번호
            <S.DropBoxul>
              <S.DropBoxli>1번</S.DropBoxli>
              <S.DropBoxli>2번</S.DropBoxli>
              <S.DropBoxli>3번</S.DropBoxli>
              <S.DropBoxli>4번</S.DropBoxli>
              <S.DropBoxli>5번</S.DropBoxli>
              <S.DropBoxli>6번</S.DropBoxli>
              <S.DropBoxli>7번</S.DropBoxli>
              <S.DropBoxli>8번</S.DropBoxli>
              <S.DropBoxli>9번</S.DropBoxli>
              <S.DropBoxli>10번</S.DropBoxli>
              <S.DropBoxli>11번</S.DropBoxli>
              <S.DropBoxli>12번</S.DropBoxli>
              <S.DropBoxli>13번</S.DropBoxli>
              <S.DropBoxli>14번</S.DropBoxli>
              <S.DropBoxli>15번</S.DropBoxli>
              <S.DropBoxli>16번</S.DropBoxli>
            </S.DropBoxul>
          </S.DropBox>
        </S.inputDiv>

        <S.submitButton
          top={70}
          left={37}
          width={21}
          height={7}
          type={"submit"}
        >
          가입하기
        </S.submitButton>
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
