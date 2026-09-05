import { createContext, useContext, useEffect, useState, } from "react";
import { getCompletedEnrollments, getMyEnrollments } from "../Services/EnrollmentService";
import { AuthContext } from "./AuthContext";
import { AlertContext } from "./AlertContext";

export const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {

    const { auth } = useContext(AuthContext)
    const { showAlert } = useContext(AlertContext)

    const [enrollments, setEnrollments] = useState([]);
    const [completedEnrollments, setCompletedEnrollments] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (auth) {
            fetchEnrollments()
            fetchCompletedEnrollments()
        }
    }, [auth])


    // GET ALL USER ENROLLMENTS
    const fetchEnrollments = async () => {
        try {

            setLoading(true);
            const response = await getMyEnrollments();
            setEnrollments(response.data || []);

        } catch (error) {

            showAlert(error.message, "error");

        } finally {
            setLoading(false);
        }
    };


    const fetchCompletedEnrollments = async () => {
        try {

            setLoading(true)
            const response = await getCompletedEnrollments();
            setCompletedEnrollments(response.data)

        } catch (error) {

            showAlert(error.message, "error");

        } finally {
            setLoading(false);
        }
    };


    return (
        <EnrollmentContext.Provider
            value={{
                enrollments,
                completedEnrollments,
                loading,

                fetchEnrollments,
            }}
        >
            {children}
        </EnrollmentContext.Provider>
    );
};