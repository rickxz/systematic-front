import React from 'react';
import { Navigate } from 'react-router-dom';
import { useVerifyIfLoggedIn } from '../../hooks/temporaryHooks/useVerifyIfLoggedIn';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isLoggedIn, isChecking } = useVerifyIfLoggedIn(); 
  console.log(isLoggedIn);

  if (isChecking) {
    return null; // Or render a loading component, e.g., <Loading />
  }

  if (!isLoggedIn) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};

export default ProtectedRoute;
