// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";

const NewUser = () => {
  const newUsers = useSelector((state) => state.newSubscriber.users);

  return (
    <div className="userSection">
      Subscribers:
      {newUsers.map((item, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div>
            <ul key={index}>
              <li>{item}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default NewUser;
