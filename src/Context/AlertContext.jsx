import React, { createContext, useContext, useState, useCallback } from "react";
import Alert from "../Components/Alert";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {

    const [alert, setAlert] = useState({
        show: false,
        type: "success",
        message: ""
    });

    const showAlert = useCallback((message, type = "success") => {
        setAlert({ show: true, type, message });
    }, []);

    const closeAlert = useCallback(() => {
        setAlert({ show: false, type: "success", message: "" });
    }, []);

    return (
        <AlertContext.Provider value={{ showAlert, closeAlert }}>
            {children}

            {alert.show && (
                <Alert
                    type={alert.type}
                    message={alert.message}
                    onClose={closeAlert}
                />
            )}
        </AlertContext.Provider>
    );
};

