import styled from "styled-components";

///////////////////////////////
//      Pagina de posts      //
///////////////////////////////

export const BodyPosts = styled.div`
    width: 100%;
    min-height: 30vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    a{
        font-size: 18px;
        color: #000;
        text-decoration: none;
    }
    h3{
        font-size: 24px;
        margin-top: 15px;
    }
    h2{
        font-size: 24px;
        margin: 25px;
    }
`;

// PostBody
export const ListPosts = styled.ul`
    width: 80%;
    min-height: 10vh;
    padding: 15px;
    list-style-type: none;
    a{
        color: #000;
        text-decoration: none;
    }
`;

export const Post = styled.li`
    width: 100%;
    min-height: 15vh;
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
        p{
            font-size: 18px;
            margin-top: 10px;
        }
    }
    @media(max-width:767px){
        div{
            h3{
                font-size: 20px;
                margin-bottom: 0;
            }
            p{
                font-size: 14px;
            }
        }
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
export const BtnsDelAtt = styled.div`
      display: flex;
      justify-content: space-between;
      flex-direction: row;
        button{
            background-color: #fff;
            border: none;
            cursor: pointer;
            margin: 0 5px;
        }
        a{
            margin: 0 5px;
        }
`;
// PostBody end.

// PostInput
export const TextForm = styled.h3`
    font-size: 24px;
    margin: 15px;
`;
export const FormPost = styled.form`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #e7e7e7;
`;
export const InputTitle = styled.input`
    width: 400px;
    margin: 10px;
    font-size: 18px;
    padding: 10px;
    border: 2px solid #000;
    border-radius: 9px;
    outline: none;
    /* media para tablet*/
    @media (max-width:1023px){
        width: 280px;
    }
    @media (max-width: 767px){
        width: 110px;
        font-size: 14px;
        padding: 5px;
        margin: 5px;
    }
    
`;
export const InputPost = styled(InputTitle)`
`;
export const ButtonPost = styled.button`
    width: 105px;
    height: 45px;
    font-size: 18px;
    color: #fff;
    background-color: #2557a7;
    border: none;
    border-radius: 9px;
    cursor: pointer;
    transition: 0.2s;
    margin-left: 5px;
    :hover{
        width: 110px;
        height: 50px;
        margin-left: 0;
    }
    @media (max-width: 767px){
        width: 75px;
        height: 29px;
        font-size: 12px;
        :hover{
            width: 80px;
            height: 32px;
        }
    }
`;
// PostInput end.
// deletecomponent
export const DeleteDiv = styled.div`
    
`;
export const DeletePop = styled.div`
    width: 350px ;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid #000;
    background-color: #fff;
    border-radius: 9px;
    box-shadow: 3px 3px 2px #c3c3c3;
    p{
        font-size: 18px;
        margin: 5px;
        margin-top: 15px;
    }
    div{
        button{
            width: 100px;
            height: 45px;
            background-color: #2557a7;
            border: none;
            margin: 5px;
            border-radius: 9px;
            color: #fff;
            font-size: 18px;
            cursor: pointer;
            transition: 0.2s;
            box-shadow: 2px 2px 2px #c3c3c3;
            :hover{
                width: 110px;
                height: 55px;
                margin: -5px 0;
            }
        }
    }
    @media(max-width:767px){
        width: 300px;
        min-height: 100px;
        margin-left: 50px;
        p{
            font-size: 14px;
        }
        div{

            button{
                width: 75px;
                height: 35px;
                font-size: 14px;
            }
        }
    }
`;
export const Btndel = styled.button`
    width: 35px;
    height: 30px;
    font-size: 18px;
    background: none;
    border-radius: 6px;
    margin-left: 15px;
`;
// deletecomponent end

// details
export const DetailsDiv = styled.div`
    width: 80%;
    display: flex;
    text-align: start;
    align-items: center;
    margin: 25px 0;
    h1{
        font-size: 26px;
    }
    a{
        margin-right: 15px;
    }
`;
export const CommentsBody = styled.div`
    width: 70% ;
    min-height: 10vh ;
    h3{
        text-align: center;
        margin-bottom: 25px;
    }
`;
export const CommentsDiv = styled.div`
    width: 100%;
    min-height: 7vh;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 15px;
    padding: 5px 15px;
    h4{
        margin-bottom: 5px;
    }
`;
//details end

//404page
export const NotFoundDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 50px;
    a{
        color: black;
        text-decoration: none;
        cursor: pointer;
        margin-top: 15px;
    }
`;
//404pageNotfound