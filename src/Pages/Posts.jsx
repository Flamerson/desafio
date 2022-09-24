import React from 'react';

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