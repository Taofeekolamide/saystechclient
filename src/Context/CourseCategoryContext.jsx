import { createContext, useContext, useEffect, useState } from "react";
import { createCategory, deleteCategory, getCategories, updateCategory } from "../Services/CourseCategoryService";
import { AuthContext } from "./AuthContext";
import { AlertContext } from "./AlertContext";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {

    const { auth } = useContext(AuthContext)
    const { showAlert } = useContext(AlertContext)

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (auth) {
            loadCategories();
        }
    }, [auth]);


    // GET ALL CATEGORIES
    const loadCategories = async () => {
        setLoading(true);
        try {

            
            const response = await getCategories();
            setCategories(response.data || []);

        } catch (error) {

            showAlert(error.message, "error");

        } finally {
            setLoading(false);
        }
    };


    const [categoryForm, setCategoryForm] = useState({
        name: "",
        description: "",
        imageUrl: null
    })


    // CREATE CATEGORY
    const addCategory = async (e) => {
        e.preventDefault()

        setLoading(true);
        try {
            const response = await createCategory(categoryForm);
            await loadCategories();

            showAlert(response.message, "success");
            setCategoryForm({
                name: "",
                description: "",
                imageUrl: null
            })
        } catch (error) {

            showAlert(error.message, "error");

        } finally {
            setLoading(false);
        }
    };


    // UPDATE CATEGORY
    const editCategory = async (id) => {
        setLoading(true);
        try {

            const response = await updateCategory(id, categoryForm);
            await loadCategories();
            showAlert(response.message, "success");

        } catch (error) {

            showAlert(error.message, "error");
            
        } finally {
            setLoading(false);
        }
    };



    // DELETE CATEGORY
    const removeCategory = async (id) => {
        setLoading(true);
        try {

            const response = await deleteCategory(id);
            await loadCategories();
            showAlert(response.message, "success");

        } catch (error) {

            showAlert(error.message, "error");

        } finally {
            setLoading(false);
        }

    };


    return (

        <CategoryContext.Provider
            value={{
                categoryForm,
                categories,
                loading,

                setCategoryForm,

                addCategory,
                editCategory,
                removeCategory
            }}
        >

            {children}

        </CategoryContext.Provider>

    );

};