import React, {useState} from 'react';
import {InputTitle, InputPost, ButtonPost, FormPost} from "../Styled/Styled";
import api from '../Services/Api';
import { useParams } from 'react-router-dom';

export default function PostUpdate(){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    let {userId} = useParams();

    const atualizarPost = () => {
        if(!!title || !!body){
            api.put(`/posts/${userId}`, {
                title: title,
                body: body
            })
            .then(res => {alert(`title: ${res.data.title} body: ${res.data.body}`); if(res){setTitle(""); setBody("")}})
            .catch(err => console.log(err))
        }
    }

    return(
        <>
            <FormPost onSubmit={e => {e.preventDefault(); atualizarPost()}}>
                <InputTitle value={title} onChange={e => setTitle(e.target.value)} />
                <InputPost value={body} onChange={e => setBody(e.target.value)} />
                <ButtonPost>Atualizar</ButtonPost>
            </FormPost>
        </>
    )
}