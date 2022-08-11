import { Navigate, Outlet } from 'react-router-dom';

const PrivetRoutes = () => {
    let auth = { token: false };
    return auth.token ? <Outlet /> : <Navigate to='login' />;
};

export default PrivetRoutes;
