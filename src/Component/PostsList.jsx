import React, {useState} from 'react';
import axios from 'axios';
import {ListPosts , Post, TextBody, TextTittle} from '../Styled/Styled';

export default function PostsList(){
    const [posts , setPosts] = useState([]);

    //solicitação dos posts, aqui está sem otimização ainda, é preciso utilizar um sistema de otimização.
    async function getPosts() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            if(response){
                setPosts(response.data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    getPosts();

    //Renderização dos posts já está ocorrendo mas sem tratamento , passando a trabalhar em tratar os posts , para começar a estilizar.
    return(
        <div>
            <ListPosts> 
                {
                    posts.map((posts, key) => {
                        return(
                            <Post key={posts.id}>
                                <TextTittle>{posts.title}</TextTittle>
                                <TextBody>{posts.body}</TextBody>
                            </Post>
                        );
                    })
                }
            </ListPosts>
        </div>
    );
};