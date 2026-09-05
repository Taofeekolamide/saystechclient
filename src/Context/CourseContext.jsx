import { createContext, useContext, useEffect, useState } from "react";
import { createCourse, deleteCourse, getCourses, getCoursesByCategory, updateCourse } from "../Services/CourseService";
import { AuthContext } from "./AuthContext";
import { AlertContext } from "./AlertContext";


export const CourseContext = createContext();


export const CourseProvider = ({ children }) => {

    const { auth } = useContext(AuthContext)
    const { showAlert } = useContext(AlertContext)

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    // LOAD COURSES ON START
    useEffect(() => {
        if (auth) {
            loadCourses();
        }
    }, [auth]);


    // GET ALL COURSES
    const loadCourses = async () => {
        setLoading(true);
        try {

            const response = await getCourses();
            setCourses(response.data || []);

        } catch (error) {

            showAlert(error.message, "error");

        } finally {

            setLoading(false);

        }

    };


    // GET COURSES BY CATEGORY
    const loadCoursesByCategory = async (categoryId) => {
        setLoading(true);
        try {

            const response = await getCoursesByCategory(categoryId);
            setCourses(response.data || []);

        } catch (error) {

            showAlert(error.message, "error");

        } finally {

            setLoading(false);

        }

    };


    const [course, setCourse] = useState({
        title: "",
        categoryId: "",
        price: "",
        description: "",
        level: "",
        thumbnail: null,
        durationInHours: ""
    });


    // CREATE COURSE
    const addCourse = async (e) => {
        e.preventDefault()


        if (!course?.title.trim()) {
            showAlert("Course title is required.", "error");
            return;
        }

        if (!course?.categoryId) {
            showAlert("Please select a category.", "error");
            return;
        }

        setLoading(true);
        try {

            const response = await createCourse(course);
            await loadCourses();
            showAlert(response.message, "success");

            setCourse({
                title: "",
                categoryId: "",
                price: "",
                description: "",
                level: "",
                thumbnail: null,
                durationInHours: ""
            });

        } catch (error) {

            showAlert(error.message, "error");

        } finally {

            setLoading(false);

        }

    };


    // UPDATE COURSE
    const editCourse = async (id, course) => {
        setLoading(true);
        try {

            const response = await updateCourse(id, course);
            await loadCourses();
            showAlert(response.message, "success");

        } catch (error) {

            showAlert(error.message, "error")

        } finally {

            setLoading(false);

        }

    };


    // DELETE COURSE
    const removeCourse = async (id) => {
        setLoading(true);
        try {

            const response = await deleteCourse(id);
            await loadCourses();
            showAlert(response.message, "success");

        } catch (error) {

            showAlert(error.message, "error");

        } finally {

            setLoading(false);

        }

    };



    return (

        <CourseContext.Provider
            value={{

                // State
                courses,
                loading,
                course,
                setCourse,

                // Get
                loadCourses,
                loadCoursesByCategory,

                // CRUD
                addCourse,
                editCourse,
                removeCourse

            }}
        >

            {children}

        </CourseContext.Provider>

    );

};