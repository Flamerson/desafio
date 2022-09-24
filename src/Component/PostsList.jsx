import React, {useEffect, useState} from 'react';
import {ListPosts , Post, TextBody, TextTittle, BtnsDelAtt, DeletePop, Btndel} from '../Styled/Styled';
import {Link} from 'react-router-dom';
import api from '../Services/Api';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Popup from 'reactjs-popup';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function PostsList(){
    const [posts , setPosts] = useState([]);
    const [disp, setDisp] = useState("none");

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

    const PopupDel = (id) => (
        <Popup trigger={<button><DeleteIcon/></button>} position="left">
          {close => (
            <DeletePop>
                <p>Deseja realmente excluir o post?</p>
                <div>
                    <button onClick={
                        del => {
                            api.delete(`/posts/${id.props}`)
                            .then(() => setDisp(""))
                            .catch(err => console.log(err));
                            close()
                        }
                    }>confirmar</button>
                    <button onClick={close}>cancelar</button>
                </div>
            </DeletePop>
          )}
        </Popup>
      );
    

    //Renderização dos posts já está ocorrendo mas sem tratamento , passando a trabalhar em tratar os posts , para começar a estilizar.
    return(
        <>
            <Stack sx={{ width: '100%', display: disp, transition: "0.2s"}} spacing={2}>
                <Alert severity="error">Post deletado com sucesso! <Btndel onClick={e => {setDisp("none")}}>x</Btndel></Alert>
            </Stack>
            <ListPosts> 
                {
                    posts.map((posts) => {
                        return(
                            <Post key={posts.id}>
                                <Link to={`/details/${posts.userId}/${posts.id}`}>
                                    <div>
                                    <TextTittle>{posts.title}</TextTittle>
                                    <TextBody>{posts.body}</TextBody>
                                    </div>
                                </Link>
                                    <BtnsDelAtt>
                                        <Link to={`/update/${posts.id}`}><EditIcon/></Link>
                                        <PopupDel props={posts.id}/>
                                    </BtnsDelAtt>
                                </Post>
                        );
                    })
                }
            </ListPosts>
        </>
    );
};