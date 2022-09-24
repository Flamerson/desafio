import React from 'react';
import {Link} from 'react-router-dom';

import PostUpdate from '../Component/PostUpdate';

export default function UpdatePost(){
    return(
        <>
            <PostUpdate />
            <h1>Hello update page</h1>
            <Link to={"/"}>Link</Link>
        </>
    )
}