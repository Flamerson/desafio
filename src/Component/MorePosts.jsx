import React, {useEffect, useState} from "react";
import api from "../Services/Api";
import { useParams } from "react-router-dom";

export default function MorePosts(){

    const [posts, setPosts] = useState([]);

    let {userId} = useParams();

    useEffect(()=>{
        api.get(`/users/${userId}/posts`)
            .then(res => setPosts(res.data))
            .catch(err => console.error(err))
    },[])

    return(
        <>
            {
                posts.map((post,key) => {
                    return(
                        <div key={key}>
                            <h3>title: {post.title}</h3>
                            <p>body: {post.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}