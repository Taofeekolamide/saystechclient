import { createContext, useContext, useState } from "react";
import { createLesson, deleteLesson, getLessons, getLessonsByCourse, updateLesson } from "../Services/LessonService";
import { AuthContext } from "./AuthContext";
import { AlertContext } from "./AlertContext";



export const LessonContext = createContext();

export const LessonProvider = ({ children }) => {

    const { showAlert } = useContext(AlertContext)

    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(false);

    // GET ALL LESSONS
    const fetchLessons = async () => {
        try {

            setLoading(true);
            const response = await getLessons();
            setLessons(response.data || []);

        } catch (error) {
            showAlert(error.message, "error");
        } finally {
            setLoading(false);
        }
    };


    // GET LESSONS FOR A COURSE
    const fetchCourseLessons = async (courseId) => {
        try {

            setLoading(true);
            const response = await getLessonsByCourse(courseId);
            const courseLessons = response.data || [];
            setLessons(courseLessons);

        } catch (error) {

            showAlert(error.message, "error");
            
        } finally {
            setLoading(false);
        }
    };


    const [lesson, setLesson] = useState({
        title: "",
        description: "",
        videoUrl: "",
        courseId: "",
        durationInMinutes: "",
        order: 0
    });

    // CREATE LESSON
    const addLesson = async (e) => {
        e.preventDefault()

        if (!lesson.title.trim()) {
            showAlert("Lesson title is required.", "error");
            return;
        }

        try {

            setLoading(true);
            const response = await createLesson(lesson)

            fetchLessons()
            showAlert(response.message, "success");

            setLesson({
                title: "",
                description: "",
                videoUrl: "",
                courseId: "",
                durationInMinutes: "",
                order: 0
            });

        } catch (error) {

            showAlert(error.message, "error");

        } finally {
            setLoading(false);
        }
    };


    // UPDATE LESSON
    const editLesson = async (id) => {
        try {

            setLoading(true);
            const response = await updateLesson(id, lesson);
            fetchLessons()

        } catch (error) {

            showAlert(error.message, "error");

        } finally {
            setLoading(false);
        }
    };


    // DELETE LESSON
    const removeLesson = async (id) => {
        try {

            setLoading(true);
            const response = await deleteLesson(id);
            fetchLessons()

        } catch (error) {

            showAlert(error.message, "error");
            
        } finally {
            setLoading(false);
        }
    };


    return (
        <LessonContext.Provider
            value={{
                lessons,
                loading,

                lesson,
                setLesson,

                fetchLessons,
                fetchCourseLessons,
                addLesson,
                editLesson,
                removeLesson
            }}
        >
            {children}
        </LessonContext.Provider>
    );
};