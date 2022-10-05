import * as S from "./loginSource/style";
import userLogo from "./resource/userIcon.svg";

function MyPage() {
  return (
    <>
      <S.userInfo>
        <S.userIcon width={15.6} height={66} Name={userLogo}></S.userIcon>
        <S.userName>이하린</S.userName>
      </S.userInfo>
      <S.userInfoshadow></S.userInfoshadow>
    </>
  );
}

export default MyPage;
