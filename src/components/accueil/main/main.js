import React, { useState } from "react";
import "./main.css";
import Tweet from "../../tweet/tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);
  const [tweets, setTweets] = useState([
    { id: 1, tweet: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem", likeNumber: "25", comment: "1" },
    { id: 2, tweet: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem ", likeNumber: "96", comment: "5" },
    { id: 3, tweet: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem", likeNumber: "60" },
    { id: 4, tweet: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem", likeNumber: "60" },
    { id: 5, tweet: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem", likeNumber: "60" },
    { id: 6, tweet: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem", likeNumber: "60" },
  ]);

  const handleDelete = (id) => {
    const updatedTweets = tweets.filter((tweet) => tweet.id !== id);
    setTweets(updatedTweets);
  };

  const followHandler = () => {
    setFollow((prevFollow) => !prevFollow);
  };

  return (
    <div id="container-main">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet.tweet}
          likeNumber={tweet.likeNumber}
          id={tweet.id}
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
};

export default Main;
