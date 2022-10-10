import * as S from "./loginSource/style";
import userLogo from "./resource/userIcon.svg";
import EmailWhite from "./resource/EmailWhite.svg";
import GithubWhite from "./resource/GithubWhite.svg";
import Smile from "./resource/Smile.svg";
import postIcon from "./resource/postIcon.svg";

import ReturnPost from "./returnPost";

import userData from "./data.json";

function MyPage() {
  let userInterests = null;
  let userPost: any = "";

  function MakePost () {
    for(let i=0; i<Object.keys(userData.user1.posts).length; i++) {
      userData.user1.posts[i]
    }
  }
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
        <S.userName>
          <b>{userData.user1.name}</b>
        </S.userName>
        <S.userGCN>
          {userData.user1.grade}학년 {userData.user1.class}반{" "}
          {userData.user1.studentNumber}번
        </S.userGCN>
        <S.statusMessage>{userData.user1.statusMessage}</S.statusMessage>
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
        <S.interestDiv>
          {Object.keys(userData.user1.interests).length < 1 && (
            <S.noInterests>나를 표현할 멋진 태그를 설정해보세요</S.noInterests>
          )}
          {userInterests}
        </S.interestDiv>
        <S.Smile
          top={18}
          left={67}
          width={3.1}
          height={15}
          Name={Smile}
        ></S.Smile>
        <S.tagText>
          <b>{userData.user1.name}</b>님은 이런 것들에 관심 있어요!
        </S.tagText>
      </S.userInfo>
      <S.userInfoshadow></S.userInfoshadow>
      {Object.keys(userData.user1.posts).length > 0 && (
        <S.postText top={60} left={20} width={5.5} height={3} Name={postIcon}>
          게시글
        </S.postText>
      )}

      {Object.keys(userData.user1.posts).length > 0 && (
        
      )}
      {Object.keys(userData.user1.posts).length < 1 && (
        <S.myPostDiv>
          게시글이 없네요.{"\n"}친구들과 멋진 글을 공유해보세요!
        </S.myPostDiv>
      )}
    </>
  );
}

export default MyPage;
