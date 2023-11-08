import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem("authenticated") === "true"
    );

    const login = async () => {
        setAuthenticated(true);
        localStorage.setItem("authenticated", "true");
    };

    const logout = () => {
        setAuthenticated(false);
        localStorage.removeItem("authenticated");
    };

    return (
        <AuthContext.Provider value={{ authenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
