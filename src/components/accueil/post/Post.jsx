import React, { useState, useRef } from "react";
import { CgMoreAlt } from "react-icons/cg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../../features/auth/authSlice";
import GetCookie from "../../../cookies/JWT/GetCookie";
import axios from "axios";

const Post = (props) => {


  const [post, setPost] = useState(props.post);
  const [like, setLike] = useState(post.liked);
  const [showMenu, setShowMenu] = useState(false);
  const menuBoxRef = useRef(null);
  const token = GetCookie('jwt')

  const user = useSelector(selectCurrentUser)

  const likePost = (action) => {
    const headers = { Authorization: `Bearer ${token}` };
    axios.post(`http://127.0.0.1:8000/api/poste/${post.id}/like`, { action }, { headers })
      .then(() => {
        if (action === 'like') {
          setLike(true);
          setPost({ ...post, reacts: post.reacts + 1 });
        } else if (action === 'dislike') {
          setLike(false);
          setPost({ ...post, reacts: post.reacts - 1 });
        }
      })
      .catch((error) => console.log(error));
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
          src="ayadi.jpeg"
          alt="profile"
          id="image-profile"
        />
      </div>
      <div id="box-tweet">
        <div id="name-id">
          <div className="publieur">

            <span id="flex-tweet">
              <p id="tweet-name" className="first-letter no-margin">{post.prenom} {post.nom}</p>
              <p id="type_poste" className="no-margin date_poste">{post.created_at}</p>
            </span>
            <div className="type">
              <p className="role_poste first-letter">( {post.role} )</p>
              <p id="type_poste" className="first-letter">{post.type}</p>
            </div>
          </div>
          <div className="containe">
            <div className="group-menu">
              <span id="span-more" className="menu-icon" onClick={showMenuHandler}>
                <CgMoreAlt />
              </span>
            </div>
            <div id="menu-box" ref={menuBoxRef}>
              <div className="info">
                <span onClick={handleEdit}>Edit</span>
              </div>
              <div className="info">
                <span onClick={handleDelete}>Delete</span>
              </div>
            </div>
          </div>
        </div>
        <div id="post-box">
          <p id="text-tweet">{post.libelle}</p>
        </div>
        {user ? (
          <div id="nav-bottom-post">
            <div id="box-like-number">
              {like
                ? (
                  <span onClick={() => likePost('dislike')} className="like" id="nav-icon-box">
                    {like === true ? <AiFillHeart id="red-heart" /> : <AiOutlineHeart />}
                  </span>
                ) : (
                  <span onClick={() => likePost('like')} className="like" id="nav-icon-box">
                    {like === true ? <AiFillHeart /> : <AiOutlineHeart />}
                  </span>
                )
              }
              <span id="like-number">{post.reacts}</span>
            </div>
          </div>
        )
          : <div id="nav-bottom-post">
            <div id="box-like-number">
              <span className=" like_no_hover" id="nav-icon-box">
                <AiOutlineHeart />
              </span>
              <span id="like-number">{post.reacts}</span>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Post;
