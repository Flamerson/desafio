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

    //solicitação dos posts, está mais otimizado.
    useEffect(()=> {
        api.get('/posts')
        .then(res => {setPosts(res.data)})
        .catch(err => console.log(err));
    }, [])

    const PopupDel = (id) => (
        <Popup trigger={<button><DeleteIcon/></button>} position="left">
          {close => (
            <DeletePop>
                <p>Deseja realmente excluir o post?</p>
                <div>
                    <button onClick={
                        () => {
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