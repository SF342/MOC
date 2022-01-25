import React from "react";
import { AuthProvider } from "./AuthProviders";
import Routes from "./Routes";

export default Providers = () => {
    return (
        <AuthProvider>
            <Routes/>
        </AuthProvider>
    );
}