import React, {useEffect, useState} from 'react';
import {ListPosts , Post, TextBody, TextTittle} from '../Styled/Styled';
import {Link} from 'react-router-dom';
import api from '../Services/Api';

export default function PostsList(){
    const [posts , setPosts] = useState([]);

    //solicitação dos posts, aqui está sem otimização ainda, é preciso utilizar um sistema de otimização.

    useEffect(()=> {
        api.get('/posts')
        .then(res => {setPosts(res.data)})
        .catch(err => console.log(err));
    }, [])
    

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
                                <Link to={`/update/${posts.id}`}>Link</Link>
                            </Post>
                        );
                    })
                }
            </ListPosts>
        </div>
    );
};