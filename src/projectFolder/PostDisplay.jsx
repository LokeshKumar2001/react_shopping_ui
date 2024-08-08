import React, { useState } from "react";
import UseForm from "./UseForm";
import CommentForm from "./CommentForm";
import NewUser from "./NewUser";
import NewComments from "./NewComments";
import { useDispatch } from "react-redux";
import { increment } from "./redux/CounterSlice";

const PostDisplay = () => {
  const [showUser, setShowUser] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const dispatch = useDispatch();

  const likeHandler = () => {
    dispatch(increment());
  };

  const userHandler = () => {
    setShowUser(true);
  };

  const commentHandler = () => {
    setShowComment(true);
  };

  return (
    <div className="postSection">
      <div className="poster">
        <div className="postImage">
          <img src="assets/Kashmir.jpg" alt="" />
        </div>
        <div className="postButtons">
          <button onClick={userHandler}>Subscribe</button>
          <button onClick={commentHandler}>Comment</button>
          <button onClick={likeHandler}>Like</button>
        </div>
        <div className="userForm">
          {showUser && <UseForm />}
          {showComment && <CommentForm />}
        </div>
      </div>
      <div className="subSection">
        <NewUser />
        <NewComments />
      </div>
    </div>
  );
};

export default PostDisplay;
