import React, {useEffect, useState} from "react";
import api from "../Services/Api";
import {useParams} from "react-router-dom";

export default function PostComments(){

    const [comments , setComments] = useState([]);

    let {postId} = useParams();

    useEffect(()=>{
        api.get(`/posts/${postId}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.error(err))
    }, [])

    return(
        <>
            {
                comments.map((com,key) => {
                    return(
                        <div key={key}>
                            <h3>{com.name}</h3>
                            <h4>{com.email}</h4>
                            <p>{com.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}