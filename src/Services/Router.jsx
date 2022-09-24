import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import
import Posts from '../Pages/Posts';
import NotFound from '../Pages/NotFound';
import UpdatePost from '../Pages/UpdatePost';

//Rotas , Aqui está todas as configurações das rotas.
const router = createBrowserRouter([
    {
        path: '/',
        element: (<Posts/>),
        errorElement: <NotFound/>,
    },
    {
        path: '/update/:userId',
        element: (<UpdatePost/>),
    }
]); 
 
export default function Router(){
    return(
        <RouterProvider router={router} />
    );
};