import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log(res.data.map(friend => friend.name));
        setFriends(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  console.log("friends", friends);
  return (
    <div className="friendlist">
      <div>
        {friends.map(friend => {
          return (
            <>
              <h2>{friend.name}</h2>
              <p>{friend.email}</p>
              <p>{friend.age}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default FriendsList;
