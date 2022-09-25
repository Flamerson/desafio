import React, {useState} from 'react';
import {InputTitle, InputPost, ButtonPost, FormPost} from "../Styled/Styled";
import api from '../Services/Api';
import { useNavigate, useParams } from 'react-router-dom';

export default function PostUpdate(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    let {postId} = useParams();
    const navigate = useNavigate();

    const atualizarPost = () => {
        if(!!title || !!body){
            api.put(`/posts/${postId}`, {
                title: title,
                body: body
            })
            .then(res => {alert(`Novo Titulo: ${res.data.title}  Novo corpo: ${res.data.body}`); if(res){setTitle(""); setBody("")}; navigate("/")})
            .catch(err => console.log(err))
        }
    }

    return(
        <>
            <FormPost onSubmit={e => {e.preventDefault(); atualizarPost()}}>
                <InputTitle placeholder='Titulo novo' value={title} onChange={e => setTitle(e.target.value)} />
                <InputPost placeholder='Corpo novo' value={body} onChange={e => setBody(e.target.value)} />
                <ButtonPost>Atualizar</ButtonPost>
            </FormPost>
        </>
    )
}