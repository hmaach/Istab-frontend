import React, { useState, useRef } from "react";
import { CgMoreAlt } from "react-icons/cg";
import { SiGoogleanalytics } from "react-icons/si";
import { FiShare } from "react-icons/fi";
import { AiOutlineRetweet, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

const Tweet = (props) => {
  const [like, setLike] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuBoxRef = useRef(null);

  const likeHandler = () => {
    setLike(!like);
  };

  const showMenuHandler = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    const menuBox = menuBoxRef.current;
    if (menuBox) {
      menuBox.classList.toggle("style");
      menuBox.style.visibility = "visible";
    }
  };

  const handleEdit = () => {
    console.log("Edit button clicked");
  };

  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div id="tweet-box">
      <div id="profile-tweet">
        <img
          src="https://avatars.githubusercontent.com/u/79016171?s=400&u=9376daf7bc67c804b89790ffc455fb5981c6d369&v=4"
          alt="profile"
          id="image-profile"
        />
      </div>

      <div id="box-tweet">
        <div id="name-id">
          <span id="flex-tweet">
            <p id="tweet-name">ali turkaman</p>
            <p id="tweet-id">@ATurkaman . </p>
            <p id="tweet-date">Aug 10</p>
          </span>

          <div class="containe">
            <div class="group-menu">
              <span id="span-more" className="menu-icon" onClick={showMenuHandler}>
                <CgMoreAlt />
              </span>
            </div>

            <div id="menu-box" ref={menuBoxRef}>
              <div class="info">
                <span onClick={handleEdit}>Edit</span>
              </div>
              <div class="info">
                <span onClick={handleDelete}>Delete</span>
              </div>
            </div>
          </div>
        </div>

        <div id="post-box">
          <p id="text-tweet">{props.tweet}</p>
        </div>

        <div id="nav-bottom-post">
          <div id="box-like-number">
            <span onClick={likeHandler} className="like" id="nav-icon-box">
              {like === true ? <AiFillHeart id="red-heart" /> : <AiOutlineHeart />}
            </span>
            <span id="like-number">{like === true ? parseInt(props.likeNumber) + 1 : props.likeNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
