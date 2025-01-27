import React, {createContext, useEffect, useState} from "react";
import Api from "./Api";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        isLoggedIn: false,
        role: null,
        token: null,
    });

    const login = (role, token) => {
        setAuthState({isLoggedIn: true, role, token});
        localStorage.setItem("token", token);
    };

    const logout = () => {
        setAuthState({isLoggedIn: false, role: null, token: null});
        localStorage.removeItem("token");

    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            Api.get("/api/me", {headers: {Authorization: `Bearer ${token}`}})
                .then((response) => {
                    setAuthState({
                        isLoggedIn: true,
                        role: response.data.role,
                        token,
                    });
                })
                .catch(() => {
                    logout();
                });
        }
    }, []);

    return (
        <AuthContext.Provider value={{authState, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
