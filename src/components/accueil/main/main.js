import React, { useState } from "react";
import "./main.css";
import Tweet from "../../tweet/tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  console.log(follow);

  const followHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="container-main">
      <Tweet
        tweet="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem"
        likeNumber="25"
        comment="1"
      />
      <Tweet
        tweet="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem "
        likeNumber="96"
        comment="5"
      />
      <Tweet
        tweet="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem"
        likeNumber="60"
      />
      <Tweet
        tweet="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem"
        likeNumber="60"
      />
      <Tweet tweet="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem" likeNumber="60" />
      <Tweet
        tweet="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une. On utilise un texte en faux latin, le Lorem"
        likeNumber="60"
      />
    </div>
  );
};

export default Main;
