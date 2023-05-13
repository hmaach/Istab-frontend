import React, { useEffect, useState } from "react";
import "./main.css";
import Post from "../post/Post";
import axios from "axios";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../features/auth/authSlice";
import GetCookie from "../../../cookies/JWT/GetCookie";

const Main = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState();
  const curUser = useSelector(selectCurrentUser)
  const token = GetCookie('jwt')

  const fetchPosts = async () => {
    try {
      if (curUser) {
        const headers = { Authorization: `Bearer ${token}` };
        const response = await axios.get(`http://127.0.0.1:8000/api/poste`, { headers });
        const data = response.data;
        setPosts(data.postes);
        setIsLoading(false)
        // console.log('data:' + data.postes);
      } else {
        const response = await axios.get(`http://127.0.0.1:8000/api/postespublic`);
        const data = response.data;
        setPosts(data.postes);
        setIsLoading(false)
        // console.log('data2:' + data.postes);
      }
    } catch (error) {
      console.log(error);
      setErr(error)
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts()
    const interval = setInterval(() => {
      fetchPosts();
    }, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, [])

  const handleDelete = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  if (posts) {
    return (
      <div id="container-main">
        {isLoading
          ? (<LoadingSpinner />)
          : (
            posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                onDelete={handleDelete}
              />
            ))
          )
        }
      </div>
    );
  }
  else {
    return null
  }
};

export default Main;
