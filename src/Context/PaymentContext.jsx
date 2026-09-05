import { createContext, useContext, useState } from "react";
import { initializePayment } from "../Services/PaymentService";
import { AlertContext } from "./AlertContext";

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {

    const { showAlert } = useContext(AlertContext)

    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(false);

    // INITIALIZE PAYMENT
    const startPay = async (courseId) => {

        try {

            setLoading(true);
            const res = await initializePayment(courseId);
            window.location.href = res.data.authorizationUrl

        } catch (error) {

            showAlert(error.message, "error");
            
        } finally {
            setLoading(false);
        }
    };


    // GET USER PAYMENTS
    const fetchPayments = async () => {

        try {

            setLoading(true);
            const response = await getMyPayments();
            setPayments(response.data || []);

        } catch (error) {

            showAlert(error.message, "error");
            
        } finally {
            setLoading(false);
        }
    };


    return (
        <PaymentContext.Provider
            value={{
                payments,
                loading,

                startPay,
                fetchPayments,
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
};