import React , {useState,useEffect} from "react";
import { ListPosts, Post } from "../Styled/Styled";

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

    //Por enquanto só está mostrando o post , mas no futuro pode adicionar mais campos. como deletar aqui.
    return(
        <ListPosts>
            <Post>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </Post>
        </ListPosts>
    )
}