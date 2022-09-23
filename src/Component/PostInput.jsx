import React, {useState, useEffect} from "react";
import {InputTitle, InputPost, ButtonPost, FormPost} from "../Styled/Styled";
import SendIcon from '@mui/icons-material/Send';

export default function PostInput(){

    const [title, setTitle] = useState('');
    const [body, setBody] = useState("");

    useEffect(()=>{
    }, [title])
    
    function cadastrarPost() {
        if(!!title){
            console.log(title);
            setTitle("");
        }
    };

    return(
        <>
            <FormPost onSubmit={ cadastrarPost()}>
                <InputTitle type="text" Value={title} onChange={event => {setTitle(event.target.value);}}/>
                <InputPost value={body} onChange={event => setBody(event.target.value)}/>
                <ButtonPost type="submit"><SendIcon/></ButtonPost>
            </FormPost>
        </>
    );
};