import React, { useState} from "react";
import {InputTitle, InputPost, ButtonPost, FormPost, TextForm} from "../Styled/Styled";
import api from "../Services/Api";

export default function PostInput(){

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    
    // cadastrando os posts , utilizei a função para facilitar na leitura do codigo.
    function addPost() {
        if(!!title && !!body){
            api.post('/posts', {
                title: title,
                body: body
            })
            .then(res => {if(res){setTitle(() => "");setBody(() => ""); alert("O post foi cadastrado o post");}}) //aqui tem um alert para ter um retorno visual , mas pode ser usado um popup para melhorar visualmente.
            .catch(err => console.log(err))
        }
    };

    return(
        <>
            <TextForm>Adicionar nova mensagem</TextForm>
            <FormPost onSubmit={e => {e.preventDefault(); addPost();}}>
                <InputTitle placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>
                <InputPost placeholder="Corpo" rows={2} value={body} onChange={event => setBody(event.target.value)}/>
                <ButtonPost type="submit">Novo post</ButtonPost>
            </FormPost>
        </>
    );
};