import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { Loader } from './Loader/Loader';
import { Header } from './Header/Header';
import { useAuth } from 'hooks/useAuth';

const LazyContacts = lazy(() => import('pages/Contacts/Contacts'));
const LazyLogin = lazy(() => import('pages/Login/Login'));
const LazyRegister = lazy(() => import('pages/Register/Register'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/contacts" component={<LazyContacts />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LazyLogin />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LazyRegister />}
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
}
