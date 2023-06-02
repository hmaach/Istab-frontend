import React, { useEffect, useState } from "react";
import { getPublicPosts, PosterPost, SupprimerPost, UpdatePost } from "../../../app/api/postAxios";
import { selectCurrentUser } from "../../../features/auth/authSlice";
import LoadingSpinner from "../../loadingSpinner/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import GetCookie from "../../../cookies/JWT/GetCookie";
import UpdatePostAlert from "../post/UpdatePostAlert";
import { toast } from "react-toastify";
import AddPost from "../post/AddPost";
import Post from "../post/Post";
import "./main.css";
import { CircularProgress } from "@mui/material";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [filieres, setFilieres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1)
  const [err, setErr] = useState();
  const curUser = useSelector(selectCurrentUser);
  const token = GetCookie("jwt");
  const dispatch = useDispatch();
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    try {
      getPublicPosts(token, page)
        .then((data) => {
          setPosts((prevPosts) => [...prevPosts, ...data.postes]);
          setFilieres(data.filieres);
          setIsLoading(false);
        })
        .catch((error) => {
          setErr(error);
        });
    } catch (error) {
      setErr(error);
      console.log(err);
      setIsLoading(false);
    }
  };

  const fetchMorePosts = async () => {
    setIsLoadingMore(true)
    try {
      getPublicPosts(token, page + 1)
        .then((data) => {
          setPosts((prevPosts) => [...prevPosts, ...data.postes]);
          setPage(page + 1)
          setIsLoadingMore(false)

        })
        .catch((error) => {
          setErr(error);
        });
    } catch (error) {
      setErr(error);
      console.log(err);
    }
  }

  const handlePosterPost = (post) => {
    // console.log(post);
    PosterPost(post, token)
      .then((data) => {
        console.log(data.message);
        console.log(data.image_data);
        if (data.message === "success") {
          post = {
            ...post,
            id: data.post_id,
            user_id: curUser.id,
            nom: curUser.nom,
            prenom: curUser.prenom,
            role: curUser.role,
            reacts: 0,
            pdf_path: data.pdf_path,
            created_at: new Date().toLocaleString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            }),
          };

          setPosts((prevPosts) => [post, ...prevPosts]);

          toast.success('Publié avec succès', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        setErr(error);
        console.log(err);
        toast.error(err, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleUpdatePost = (updatedPost) => {
    UpdatePost(updatedPost, token)
      .then((data) => {
        console.log(data.message);

        if (data.message === "success") {
          setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
          );
          toast.success('Modifié avec succès', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        setErr(error);
        console.log(err);
        toast.error(err, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleDeletePost = (deletedPost) => {
    if (deletedPost.user_id === curUser.id || curUser.role === 'admin') {
      SupprimerPost(deletedPost.id, token)
        .then((data) => {
          console.log(data.message);
          if (data.message === 'success') {
            setPosts(prevPosts => prevPosts.filter(p => p.id !== deletedPost.id));
            toast.success('Supprimé avec succès', {
              position: 'top-center',
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }
        })
        .catch((error) => {
          setErr(error);
          console.log(err);
          toast.error(err, {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        });
    } else {
      console.log("Vous n'avez pas le droit d'effacer ce poste");
    }
  }

  const handleUpdateCallback2 = (post) => {
    setSelectedPost(post);
    setShowUpdateAlert(true);
  };

  const handleClose = () => {
    setShowUpdateAlert(false);
  };

  useEffect(() => {
    fetchPosts();
    // const interval = setInterval(() => {
    //   fetchPosts();
    // }, 1 * 60 * 1000);
    // return () => clearInterval(interval);
  }, []);
  if (posts) {
    return (
      <div id="container-main">

        {curUser &&
          (curUser.role === "admin" || curUser.role === "formateur") && (
            <AddPost
              onSubmit={handlePosterPost}
              filieres={filieres}
              user={curUser}
            />
          )}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {posts.map((post, index) => (
              <Post
                key={index}
                post={post}
                index={index}
                onSubmit={handleDeletePost}
                setPosts={setPosts}
                handleUpdateCallback2={() => handleUpdateCallback2(post)}
              />
            ))}
            < div className="div_get_more">
              {isLoadingMore
                ? <CircularProgress />
                : <button className="get_more" onClick={fetchMorePosts}>Get more</button>
              }
            </div>
          </>

        )
        }

        {
          showUpdateAlert && (
            <UpdatePostAlert
              onSubmit={handleUpdatePost}
              post={selectedPost}
              open={true}
              filieres={filieres}
              handleClose={handleClose}
            />
          )
        }
      </div >
    );
  } else {
    return null;
  }
};

export default Main;
