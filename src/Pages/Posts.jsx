import React from 'react';
import {BodyPosts} from '../Styled/Styled';

//Components imports
import PostsList from '../Component/PostsList';
import PostInput from '../Component/PostInput';

export default function Posts(){
    return(       
        <BodyPosts>
            <PostInput />
            <PostsList />
        </BodyPosts>
    );
};