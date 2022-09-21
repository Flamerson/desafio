import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import
import Posts from '../Pages/Posts';
import NotFound from '../Pages/NotFound';

//Rotas , Aqui está todas as configurações das rotas.
const router = createBrowserRouter([
    {
        path: '/',
        element: (<Posts/>),
        errorElement: <NotFound/>,
    },
]);

export default function Router(){
    return(
        <RouterProvider router={router} />
    );
};