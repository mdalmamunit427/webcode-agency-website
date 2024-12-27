import { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const AuthContext = createContext()

export const useAuth = () => {
    return  useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // TODO: make this true

    const auth = getAuth(app)

    // sign up new user using email and password
    const signupWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login existing user using email and password
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in
    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    // logout functionality
    const logout = () => {
        return signOut(auth)
    }

    // monitor or manage user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
          });

          return unsubscribe;
          
    }, [auth])


    const value = {
        user,
        signupWithEmail,
        loginWithEmail,
        googleLogin,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;