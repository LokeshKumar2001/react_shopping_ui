import React from "react";
import { useSelector } from "react-redux";

const NewComments = () => {
  const newComment = useSelector((state) => state.newComments.comments);
  return (
    <div className="commentSection">
      New Comments:
      {newComment.map((item, index) => {
        return (
          <div key={index}>
            <li>{item}</li>
          </div>
        );
      })}
    </div>
  );
};

export default NewComments;
