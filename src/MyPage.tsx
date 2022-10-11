import * as S from "./loginSource/style";
import userLogo from "./resource/userIcon.svg";
import EmailWhite from "./resource/EmailWhite.svg";
import GithubWhite from "./resource/GithubWhite.svg";
import Smile from "./resource/Smile.svg";
import postIcon from "./resource/postIcon.svg";
import heart from "./resource/heart.svg";
import messege from "./resource/messege.svg";

import userData from "./data.json";

function MyPage() {
  let userInterests = null;
  let postInterests: any = null;
  let userPost = null;

  //유저 태그
  if (Object.keys(userData.user1.interests).length > 0) {
    userInterests = userData.user1.interests.map(function (interest: String) {
      return <S.interests>{interest}</S.interests>;
    });
  }

  //게시글 태그
  if (Object.keys(userData.user1.posts).length > 0) {
    postInterests = userData.user1.posts.map((post) => {
      post.tags.map((tag) => {
        return <S.postTag>{tag}</S.postTag>;
      });
    });
  }

  //게시글 생성
  userPost = userData.user1.posts.map((post) => {
    //게시글 태그 생성
    postInterests = post.tags.map((tag) => {
      return <S.postTag>{tag}</S.postTag>;
    });

    if (post.id === 1) {
      return (
        <S.myPost>
          <S.postImg
            width={28}
            height={62}
            top={14}
            left={6}
            Name={post.img}
          ></S.postImg>
          <S.postTitle>{post.title}</S.postTitle>
          <S.postSummary>{post.summary}</S.postSummary>
          <S.postIconDiv>
            <S.postIcon
              top={0}
              left={0}
              width={11.3}
              height={100}
              Name={heart}
            ></S.postIcon>
            &ensp;&ensp;&ensp;
            {post.heart}
            <S.postIcon
              top={0}
              left={30}
              width={11.3}
              height={100}
              Name={messege}
            ></S.postIcon>
            &ensp;&ensp;&ensp;&ensp;&ensp;
            {post.chat}
          </S.postIconDiv>
          <S.postTagDiv>{postInterests}</S.postTagDiv>
        </S.myPost>
      );
    }
    // if (post.id === 2) {
    //   return (
    //     <S.myPost>
    //       <S.postTitle>{post.title}</S.postTitle>
    //       <S.postSummary>{post.summary}</S.postSummary>
    //     </S.myPost>
    //   );
    // }
  });
  // for (let i = 0; i < Object.keys(userData.user1.posts).length; i++) {
  //   if ((userInterests = userData.user1.posts[i].id === i)) {
  //     userPost[i] = (
  //       <S.myPost>
  //         <S.postSummary></S.postSummary>
  //         <S.postIcon></S.postIcon>
  //         <S.postTag></S.postTag>
  //       </S.myPost>
  //     );
  //   }
  // }
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
        <S.myPostDiv>{userPost}</S.myPostDiv>
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
