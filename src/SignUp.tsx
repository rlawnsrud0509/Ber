import "./App.css";
import { useState } from "react";
import * as S from "./loginSource/style";
import Email from "./resource/email.svg";
import Idcard from "./resource/idcard.svg";
import Key from "./resource/key.svg";
import Check from "./resource/Check.svg";
import BerLogo from "./resource/berlogo.svg";

function SignUp() {
  //버튼 클릭 시 드롭박스 보이게 하는 변수&함수
  const [showDropBox1, SetshowDropBox1] = useState(false);
  const [showDropBox2, SetshowDropBox2] = useState(false);
  const [showDropBox3, SetshowDropBox3] = useState(false);
  const [showDropBox4, SetshowDropBox4] = useState(false);

  function ToggleGenderBox() {
    SetshowDropBox1(!showDropBox1);
  }
  function ToggleGradeBox() {
    SetshowDropBox2(!showDropBox2);
  }
  function ToggleClassBox() {
    SetshowDropBox3(!showDropBox3);
  }
  function ToggleNumberBox() {
    SetshowDropBox4(!showDropBox4);
  }

  //드롭박스에서 선택한 값들은 요쪽 state변수에 담김.
  let [Gender, setGender] = useState("성별");
  let [Grade, setGrade] = useState("학년");
  let [Class, setClass] = useState("반");
  let [Number, setNumber] = useState("번호");

  function SetGender(gender: string) {
    setGender(gender);
  }

  return (
    <>
      <S.loginForm width={45} height={100} top={20} left={28}>
        <S.berLogo
          top={-9}
          left={10}
          width={31}
          height={16}
          Name={BerLogo}
        ></S.berLogo>
        <S.Letter>Sign Up</S.Letter>

        <S.inputDiv height={29} width={59} top={13} left={21}>
          {" "}
          {/*inputDiv로 로그인 정보창 묶음*/}
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
            type={"password"}
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
          {/*inputDiv로 드롭박스 묶음*/}
          <S.accountTxt top={-65} left={3}>
            <br />
            학생 정보
          </S.accountTxt>
          <S.DropBox onClick={ToggleGenderBox}>
            {Gender}
            {showDropBox1 && (
              <S.DropBoxul>
                <S.DropBoxli onClick={() => setGender("남자")}>
                  남자
                </S.DropBoxli>
                <S.DropBoxli onClick={() => setGender("여자")}>
                  여자
                </S.DropBoxli>
              </S.DropBoxul>
            )}
          </S.DropBox>
          <S.DropBox onClick={ToggleGradeBox}>
            {Grade}
            {showDropBox2 && (
              <S.DropBoxul>
                <S.DropBoxli onClick={() => setGrade("1학년")}>
                  1학년
                </S.DropBoxli>
                <S.DropBoxli onClick={() => setGrade("2학년")}>
                  2학년
                </S.DropBoxli>
                <S.DropBoxli onClick={() => setGrade("3학년")}>
                  3학년
                </S.DropBoxli>
              </S.DropBoxul>
            )}
          </S.DropBox>
          <S.DropBox onClick={ToggleClassBox}>
            {Class}
            {showDropBox3 && (
              <S.DropBoxul>
                <S.DropBoxli
                  onClick={() => {
                    setClass("1반");
                  }}
                >
                  1반
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setClass("2반");
                  }}
                >
                  2반
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setClass("3반");
                  }}
                >
                  3반
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setClass("반");
                  }}
                >
                  4반
                </S.DropBoxli>
              </S.DropBoxul>
            )}
          </S.DropBox>
          <S.DropBox onClick={ToggleNumberBox}>
            {Number}
            {showDropBox4 && (
              <S.DropBoxul>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("1번");
                  }}
                >
                  1번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("2번");
                  }}
                >
                  2번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("3번");
                  }}
                >
                  3번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("4번");
                  }}
                >
                  4번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("5번");
                  }}
                >
                  5번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("6번");
                  }}
                >
                  6번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("7번");
                  }}
                >
                  7번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("8번");
                  }}
                >
                  8번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("9번");
                  }}
                >
                  9번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("10번");
                  }}
                >
                  10번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("11번");
                  }}
                >
                  11번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("12번");
                  }}
                >
                  12번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("13번");
                  }}
                >
                  13번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("14번");
                  }}
                >
                  14번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("15번");
                  }}
                >
                  15번
                </S.DropBoxli>
                <S.DropBoxli
                  onClick={() => {
                    setNumber("16번");
                  }}
                >
                  16번
                </S.DropBoxli>
              </S.DropBoxul>
            )}
          </S.DropBox>
        </S.inputDiv>

        {showDropBox1 || showDropBox2 || showDropBox3 || showDropBox4 || (
          <S.submitButton
            top={70}
            left={38}
            width={21}
            height={7}
            type={"submit"}
          >
            가입하기
          </S.submitButton>
        )}
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
