import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { stackRoutes } from './stack.routes';

export const Router = () => {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: stackRoutes,
        },
    ]);

    return { router };
};