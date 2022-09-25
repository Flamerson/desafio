import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import api from '../Services/Api';

import PostDetails from '../Component/PostDetails';
import PostComments from '../Component/PostComments';
import MorePosts from '../Component/MorePosts';
import { BodyPosts, DetailsDiv } from '../Styled/Styled';

export default function Details(){

    const [user, setUser] = useState([]);
    let {userId} = useParams();

    useEffect(()=>{
        api.get(`/users/${userId}`)
         .then(res => setUser(res.data))
         .catch(err => console.error(err))
    },[])

    return(
        <BodyPosts>
            <DetailsDiv>
                <h1>{user.username}</h1>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </DetailsDiv>
            <PostDetails/>
            <PostComments/>
            <h2>Mais posts de {user.username}</h2>
            <MorePosts/>
        </BodyPosts>
    )
}