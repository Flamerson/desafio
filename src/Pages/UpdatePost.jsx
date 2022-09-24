import React from 'react';
import {Link} from 'react-router-dom';

import PostUpdate from '../Component/PostUpdate';
import PostDetails from '../Component/PostDetails';
import { BodyPosts } from '../Styled/Styled';

export default function UpdatePost(){
    return(
        <BodyPosts>
            <h1>Atualizar posts</h1>
            <PostUpdate />
            <PostDetails/>
            <Link to={"/"}>Pagina inicial</Link>
        </BodyPosts>
    )
}