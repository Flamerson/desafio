import React from 'react';
import api from '../Services/api';
import {ListPosts , Post, TextBody, TextTittle} from '../Styled/Styled';

export default function PostsList(){
    return(
        <div>
            <ListPosts>
                <Post>
                    <TextTittle>testando o texto</TextTittle>
                    <TextBody>Testando o corpo</TextBody>
                </Post>
            </ListPosts>
        </div>
    );
};