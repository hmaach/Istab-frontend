import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from "../../../features/auth/authSlice";
import GetCookie from "../../../cookies/JWT/GetCookie";
import axios from "axios";
import CustomizedMenus from "./CustomizedMenus";
import { formatDistanceToNow } from 'date-fns';
import frLocale from 'date-fns/locale/fr';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const Post = (props, { setPosts }) => {

    const [post, setPost] = useState(props.post);
    const [like, setLike] = useState(post.liked);
    const token = GetCookie('jwt')
    const user = useSelector(selectCurrentUser)

    const [showFullContent, setShowFullContent] = useState(false);

    const handleToggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    const { handleUpdateCallback2, onSubmit } = props;

    const createdDate = new Date(post.created_at);

    const relativeTime = formatDistanceToNow(createdDate, { locale: frLocale, addSuffix: true });


    const handleUpdate = () => {
        handleUpdateCallback2('ff');
    };


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
    // console.log(post);
    const handleUpdateCallback = () => {
        handleUpdate()
    };
    
    const handleDownloadPDF = (pdfPath) => {
        axios({
          url: `http://127.0.0.1:8000/api/downloadpdf?pdf_path=${pdfPath}`,
          method: 'GET',
          responseType: 'blob', 
        })
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'istab.pdf');
            document.body.appendChild(link);
            link.click();
          })
          .catch((error) => {
            console.error('Error downloading PDF:', error);
          });
      };

    const handleDeletePost = (deletedPost) => {
        onSubmit(deletedPost);
    }

    return (
        <div id="tweet-box">
            <div id="box-tweet">
                <div id="name-id">
                    <div style={{ display: "flex" }}>

                        <div id="profile-tweet">
                            <img
                                src="ayadi.jpeg"
                                alt="profile"
                                id="image-profile"
                            />
                        </div>
                        <div className="publieur">

                            <span id="flex-tweet">
                                <p
                                    id="tweet-name"
                                    className="first-letter no-margin"
                                >
                                    {post.prenom} {post.nom}
                                </p>
                                <p
                                    id="type_poste"
                                    className="no-margin date_poste first-letter"
                                >
                                    <ManageAccountsIcon
                                        style={{ fontSize: '14px', marginBottom: "5px", marginRight: "3px" }}
                                    />{post.audience}{post.audience === "filiere" ? " | " + post.filiere_extention : ""}
                                </p>
                                <p
                                    id="type_poste"
                                    className="no-margin date_poste"
                                >
                                    <AccessTimeIcon style={{ fontSize: '13px', marginBottom: "3px", marginRight: "2px" }} /> {relativeTime}
                                </p>

                            </span>
                        </div>

                        <div className="type">
                            {/* <span className="role_poste first-letter">( {post.role} )</span> */}
                            <span id="type_poste" className="first-letter">{post.type}</span>
                        </div>
                    </div>
                    {user &&
                        <CustomizedMenus
                            user={user}
                            setPosts={setPosts}
                            onSubmit={handleDeletePost}
                            post={post}
                            handleUpdateCallback={handleUpdateCallback}
                        />
                    }
                </div>
                <div id="post-box">
                    <p id="text-tweet">
                        {showFullContent ? post.libelle : `${post.libelle.substring(0, 70)}`}
                        {!showFullContent && post.libelle.length > 70 && (
                            <span className="voir_plus" onClick={handleToggleContent}>...Voir plus</span>
                        )}
                    </p>
                </div>
            </div>
            {props.index === 1 && (
                <div className="img_box">
                    <img className="img_post" src="/post_test.jpg" />
                </div>
            )}

            {post.pdf_path && (
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <div className="pdf_box" onClick={() => handleDownloadPDF(post.pdf_path)}>
                        <span className="pdf_span">
                            <PictureAsPdfIcon />
                            <span>Télécharger PDF</span>
                        </span>
                        <span className="tele_pdf_span">
                            <SaveAltIcon />
                        </span>
                    </div>
                </div>
            )}

            {props.index === 2 && (
                <div style={{ display: 'flex', justifyContent: 'start' }}>
                    <a className="post_lien" href="#">llllllllllslihjzaodizz</a>
                </div>
            )}



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
    );
};

export default Post;
