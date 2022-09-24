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

    const deletePost = (id) => {
        if(window.confirm("Você deseja realmente deletar o post?")){
            api.delete(`/posts/${id}`)
            .then(() => alert(`O post ${id} foi deletado`))
            .catch(err => console.log(err))
        }
    }
    

    //Renderização dos posts já está ocorrendo mas sem tratamento , passando a trabalhar em tratar os posts , para começar a estilizar.
    return(
        <div>
            <ListPosts> 
                {
                    posts.map((posts) => {
                        return(
                            <Post key={posts.id}>
                                <TextTittle>{posts.title}</TextTittle>
                                <TextBody>{posts.body}</TextBody>
                                <Link to={`/update/${posts.id}`}>Link</Link>
                                <form onSubmit={e => {e.preventDefault(); deletePost(posts.id)}}>
                                    <button type='submit'>delete</button>
                                </form>
                                <Link to={`/details/${posts.userId}/${posts.id}`}>Details</Link>
                            </Post>
                        );
                    })
                }
            </ListPosts>
        </div>
    );
};