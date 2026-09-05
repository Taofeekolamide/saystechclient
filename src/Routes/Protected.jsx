import { Navigate, useLocation } from "react-router-dom";

export const StudentRoute = ({ children }) => {
    const authaccess = JSON.parse(localStorage.getItem("saystechauth"));

    if (authaccess?.role === "Student") {
        return children;
    }

    return (
        <Navigate to="/login" replace />
    );
};

export const AdminRoute = ({ children }) => {
    const authaccess = JSON.parse(localStorage.getItem("saystechauth"));

    if (authaccess?.role === "Admin") {
        return children;
    }

    return (
        <Navigate to="/login" replace />
    );
};

export const ProtectedRoute = ({ children }) => {
    const authaccess = JSON.parse(localStorage.getItem("saystechauth"));

    if (authaccess) {
        return children;
    }

    return (
        <Navigate to="/login" replace />
    );
};