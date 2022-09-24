import React, {useEffect, useState} from "react";
import api from "../Services/Api";
import { Link, useParams } from "react-router-dom";
import { ListPosts, Post } from "../Styled/Styled";

export default function MorePosts(){

    const [posts, setPosts] = useState([]);

    let {userId} = useParams();

    useEffect(()=>{
        api.get(`/users/${userId}/posts`)
            .then(res => setPosts(res.data))
            .catch(err => console.error(err))
    },[])

    return(
        <ListPosts>
            {
                posts.map((post,key) => {
                    return(
                        <Post key={key}>
                            <div>
                                <h3>title: {post.title}</h3>
                                <p>body: {post.body}</p>
                            </div>
                        </Post>
                    )
                })
            }
        </ListPosts>
    )
}