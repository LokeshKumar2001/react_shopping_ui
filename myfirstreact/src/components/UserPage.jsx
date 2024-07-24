import React, { useEffect, useState } from "react";

const userDetails = "https://jsonplaceholder.typicode.com/posts";

console.log(`I am link from api: ${userDetails}`);

const UserPage = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log(userHandler());
  }, []);

  console.log(user);

  const userHandler = async () => {
    const response = await fetch(userDetails);
    const newData = await response.json();
    setUser(newData);
  };

  return (
    <div>
      {user.map((item) => {
        return (
          <div className="userSection">
            <h2 style={{ color: "blue" }}>{item.title}</h2>
            <h3 style={{ color: "green" }}>{item.body}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UserPage;
