import * as S from "./loginSource/style";
import userLogo from "./resource/userIcon.svg";
import EmailWhite from "./resource/EmailWhite.svg";
import GithubWhite from "./resource/GithubWhite.svg";
import Smile from "./resource/Smile.svg";

function MyPage() {
  return (
    <>
      <S.userInfo>
        <S.userIcon
          top={18}
          left={4}
          width={15.6}
          height={66}
          Name={userLogo}
        ></S.userIcon>
        <S.userName>이하린</S.userName>
        <S.userGCN>1학년 4반 14번</S.userGCN>
        <S.statusMessage>
          사이드 프로젝트 팀원 구하고 있습니다!{"\n"} 상단 게시글 참고해주세요
        </S.statusMessage>
        <S.linkIcon
          top={18}
          left={47}
          width={2.85}
          height={13.5}
          Name={GithubWhite}
        ></S.linkIcon>
        <S.linkIcon
          top={18}
          left={50.5}
          width={2.85}
          height={13.5}
          Name={EmailWhite}
        ></S.linkIcon>
        <S.divLine></S.divLine>
        {
          //여기 스마일넣어야댐
        }
        <S.interestDiv>
          <S.interests>ㄹㅈㄹㅈ</S.interests>
          <S.interests>ffㅈㅈㄹㄹ</S.interests>
          <S.interests>ㄹ</S.interests>
          <S.interests>ㄹ</S.interests>
          <S.interests>ㄹfwewfwef</S.interests>
          <S.interests>ffffffㄹ</S.interests>
          <S.interests>wefwefewfㄹ</S.interests>
        </S.interestDiv>
      </S.userInfo>
      <S.userInfoshadow></S.userInfoshadow>
    </>
  );
}

export default MyPage;
