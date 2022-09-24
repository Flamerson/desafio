import React, {useEffect, useState} from "react";
import api from "../Services/Api";
import {useParams} from "react-router-dom";
import { CommentsBody, CommentsDiv } from "../Styled/Styled";

export default function PostComments(){

    const [comments , setComments] = useState([]);

    let {postId} = useParams();

    useEffect(()=>{
        api.get(`/posts/${postId}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.error(err))
    }, [])

    return(
        <CommentsBody>
            <h3>Comentarios</h3>
            {
                comments.map((com) => {
                    return(
                        <CommentsDiv key={com.id}>
                            <h4>{com.name}</h4>
                            <h4>{com.email}</h4>
                            <p>{com.body}</p>
                        </CommentsDiv>
                    )
                })
            }
        </CommentsBody>
    )
}