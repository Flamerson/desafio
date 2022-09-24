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
        p{
            font-size: 18px;
            margin-top: 10px;
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