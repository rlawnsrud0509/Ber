import * as S from "./loginSource/style";
import userLogo from "./resource/userIcon.svg";

function MyPage() {
  return (
    <>
      <S.userInfo>
        <S.userIcon width={15.6} height={66} Name={userLogo}></S.userIcon>
        <S.userName>이하린</S.userName>
        <S.userGCN>1학년 4반 14번</S.userGCN>
        <S.statusMessage>
          사이드 프로젝트 팀원 구하고 있습니다!{"\n"} 상단 게시글 참고해주세요
        </S.statusMessage>
      </S.userInfo>
      <S.userInfoshadow></S.userInfoshadow>
    </>
  );
}

export default MyPage;
