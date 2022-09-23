import React from 'react';
import {Link} from 'react-router-dom';

//Components imports
import PostsList from '../Component/PostsList';
import PostInput from '../Component/PostInput';

export default function Posts(){
    return(
        <div>
            <PostInput />
            <PostsList />
        </div>
    );
};