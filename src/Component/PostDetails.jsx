import React , {useState,useEffect} from "react";

import api from "../Services/Api";
import {useParams} from "react-router-dom";

export default function PostDetails(){

    const [post, setPost] = useState([]);
    let {postId} = useParams();

    useEffect(()=>{
        api.get(`/posts/${postId}`)
        .then(res => setPost(res.data))
        .catch(err => console.error(err));
    }, [])


    return(
        <>
            <h1>Title: {post.title}</h1>
            <p>Body: {post.body}</p>
        </>
    )
}