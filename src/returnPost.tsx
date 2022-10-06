import userData from "./data.json";
import { useState } from "react";
import * as S from "./loginSource/style";

function ReturnPost(props: any) {
  let [postNumber, setPostNumber] = useState(0);

  for (let i = 1; i <= Object.keys(userData.user1.posts).length; i++) {
    if (i == props.id) {
      setPostNumber((postNumber = i));
    }
  }

  return <S.myPost></S.myPost>;
}

export default ReturnPost;
