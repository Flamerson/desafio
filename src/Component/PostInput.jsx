import React, { useState} from "react";
import {InputTitle, InputPost, ButtonPost, FormPost} from "../Styled/Styled";
import SendIcon from '@mui/icons-material/Send';
import api from "../Services/Api";

export default function PostInput(){

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    // cadastrando os posts , utilizei a função para facilitar na leitura do codigo.
    function cadastrarPost() {
        if(!!title && !!body){
            api.post('/posts', {
                title: title,
                body: body
            })
            .then(res => {if(res){setTitle(() => "");setBody(() => ""); alert("Foi cadastrado o post");}})
            .catch(err => console.log(err))
        }
    };

    return(
        <>
            <FormPost onSubmit={e => {e.preventDefault(); cadastrarPost();}}>
                <InputTitle value={title} onChange={event => setTitle(event.target.value)}/>
                <InputPost value={body} onChange={event => setBody(event.target.value)}/>
                <ButtonPost type="submit"><SendIcon/></ButtonPost>
            </FormPost>
        </>
    );
};