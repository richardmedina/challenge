import React, { FC } from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomeContainer from '../containers/home/home-container.component';

interface AppRoutesProps {}

const routes = [
    {
        path: '/',
        element: <HomeContainer />
    }
]; 

const AppRoutes : FC<AppRoutesProps> = () => {
    return (
        <RouterProvider router={createBrowserRouter(routes)} />
    );
}

export default AppRoutes;