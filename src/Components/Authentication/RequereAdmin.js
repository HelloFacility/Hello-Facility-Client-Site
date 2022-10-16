import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const RequireAdmin = ({children}) => {
    const [user, loading] =useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if(loading || adminLoading){
        return 
    }

    if(!user || !admin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;