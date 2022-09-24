import React from 'react';
import {Link} from 'react-router-dom';

import PostUpdate from '../Component/PostUpdate';
import PostDetails from '../Component/PostDetails';

export default function UpdatePost(){
    return(
        <>
            <PostUpdate />
            <PostDetails/>
            <Link to={"/"}>Link</Link>
        </>
    )
}