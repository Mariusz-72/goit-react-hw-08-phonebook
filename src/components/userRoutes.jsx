import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoutes/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('./pages/homePage/homePage.jsx'));
const MyContacts = lazy(() => import('./Contacts/MyContacts'));
const RegisterPage = lazy(() => import('./pages/registerPage/registerPage.jsx'));
const LoginPage = lazy(() => import('./pages/loginPage/loginPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/notFoundPage/notFoundPage.jsx'));

const UserRoutes = () => {
    return (
        <Suspense fallback={'Loading...'}>
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route element={<PublicRoute />}>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            </Route>

            <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<MyContacts />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
    );
};

export default UserRoutes;
