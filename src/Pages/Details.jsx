import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import api from '../Services/Api';

import PostDetails from '../Component/PostDetails';
import PostComments from '../Component/PostComments';

export default function Details(){

    const [user, setUser] = useState([]);
    let {userId} = useParams();

    useEffect(()=>{
        api.get(`/users/${userId}`)
         .then(res => setUser(res.data))
         .catch(err => console.error(err))
    },[])

    return(
        <>
            <PostDetails/>
            <h1>Autor: {user.username}</h1>
            <PostComments/>
            <Link to={"/"}>Link</Link>
        </>
    )
}