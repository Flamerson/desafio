import styled from "styled-components";

///////////////////////////////
//      Pagina de posts      //
///////////////////////////////

export const BodyPosts = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

// PostBody
export const ListPosts = styled.ul`
    width: 80%;
    min-height: 100vh;
    padding: 15px;
    list-style-type: none;
    a{
        color: #000;
        text-decoration: none;
    }
`;

export const Post = styled.li`
    width: 100%;
    height: 15vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    margin-bottom: 15px;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    padding: 15px;
    div{
        display: flex;
        flex-direction: column;
    }
`;

export const TextTittle = styled.h3`
    font-size: 24px;
    margin-bottom: 5px;
`;

export const TextBody = styled.p`
    font-size: 18px;
    margin-bottom: 5px;
`;
// PostBody end.

// PostInput
export const FormPost = styled.form`
    
`;
export const InputTitle = styled.input`
    
`;
export const InputPost = styled.input`
    
`;
export const ButtonPost = styled.button`

`;
// PostInput end.