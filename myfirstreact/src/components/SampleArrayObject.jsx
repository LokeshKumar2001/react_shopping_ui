import React from "react";

const SampleArrayObject = () => {
  let fruits = ["apple", "mango"];

  let players = [
    {
      cricket: "Dhoni",
      tennis: "Anand",
      chess: "Anand",
      hockey: "Dyan Chand",
    },
    {},
    {},
  ];
  return (
    <div>
      {/* {players.map((item) => {
        return (
          <div>
            <h2>My Fav Player in Cricketer {item.cricket}</h2>
            <h2>My Fav Player in Tennis {item.tennis}</h2>
            <h2>My Fav Player in Chess {item.chess}</h2>
            <h2>My Fav Player in Hockey {item.hockey}</h2>
          </div>
        );
      })} */}

      {players[0].chess}
      <br />
      {players[0].hockey}
      <br />
      {players[0].cricket}
      <br />
    </div>
  );
};

export default SampleArrayObject;
