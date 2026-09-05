import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { GetUser, UpdateUser } from "../Services/UserServices";
import { AlertContext } from "./AlertContext";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const { showAlert } = useContext(AlertContext)

    const { auth } = useContext(AuthContext)
    const [user, setUser] = useState({})

    useEffect(() => {
        if (auth)
            getUser()

    }, [auth])

    const getUser = async () => {
        try {

            const response = await GetUser()
            setUser(response.data)

        } catch (error) {

            showAlert(error.message, "error");

        }
    }

    
    useEffect(() => {

        setForm({
            profilePicture: user.profilePicture,
            phoneNumber: user.phoneNumber,
            firstName: user.firstName,
            lastName: user.lastName
        })

    }, [user])


    const [form, setForm] = useState({
        profilePicture: "",
        phoneNumber: "",
        firstName: "",
        lastName: ""
    })

    const [loading, setLoading] = useState(false)

    const Update = async (data) => {

        setLoading(true)

        try {

            const response = await UpdateUser(data)
            showAlert(response.message, "success")
            await getUser()

        } catch (error) {

            showAlert(error.message, "error")

        } finally {
            setLoading(false)
        }

    }

    return (

        <UserContext.Provider
            value={{
                user,
                form,
                loading,

                setForm,
                Update
            }}>

            {children}

        </UserContext.Provider>

    );
}