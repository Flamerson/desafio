import React, {useState , useEffect} from 'react';
import api from '../Services/api';
import {ListPosts , Post, TextBody, TextTittle} from '../Styled/Styled';

export default function PostsList(){
    const [posts , setPosts] = useState([]);

    //solicitação dos posts, aqui está sem otimização ainda, é preciso utilizar um sistema de otimização.
    useEffect(()=>{
        api
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(res => setPosts(res.data))
            .catch(err => console.log(`Error: ${err}`));
    }, [posts])

    //Renderização dos posts já está ocorrendo mas sem tratamento , passando a trabalhar em tratar os posts , para começar a estilizar.
    return(
        <div>
            <ListPosts> 
                <Post>
                    <TextTittle>testando o texto</TextTittle>
                    <TextBody>Testando o corpo</TextBody>
                </Post>
                {
                    posts.map((posts, key) => {
                        return(
                            <Post>
                                <TextTittle>Tittle</TextTittle>
                                <TextBody>Body</TextBody>
                            </Post>
                        );
                    })
                }
            </ListPosts>
        </div>
    );
};