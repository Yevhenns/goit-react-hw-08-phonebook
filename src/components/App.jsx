import { Route, Routes, Navigate } from 'react-router-dom';
import { ContactsPage } from 'pages/Contacts';
import { Registration } from 'pages/Registration';
import { NotFound } from 'pages/NotFound';
import { Login } from 'pages/Login';
import { Navigation } from './Navigation/Navigation';
import { GlobalStyle } from 'components/GlobalStyles';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authApi';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { RestrictedRoute } from '../Routes/RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Navigate to="/login" />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Box>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};