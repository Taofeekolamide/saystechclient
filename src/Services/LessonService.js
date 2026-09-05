import { API_URL } from "../Api/api";
import { ResponseStatus } from "../Api/ResponseStatus";

const baseUrl = `${API_URL}/Lesson`;

const getToken = () => JSON.parse(localStorage.getItem("saystechauth"));
const authHeaders = () => ({ Authorization: `Bearer ${getToken().accessToken}` });

// GET ALL LESSONS
export const getLessons = async () => {

    const res = await fetch(baseUrl,
        {
            headers: authHeaders()
        });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}


// GET LESSON BY ID
export const getLesson = async (id) => {

    const res = await fetch(`${baseUrl}/${id}`,
        {
            headers: authHeaders()
        });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
};


// GET LESSONS BY COURSE
export const getLessonsByCourse = async (courseId) => {

    const res = await fetch(`${baseUrl}/Course/${courseId}`,
        {
            headers: authHeaders()
        });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
};


// CREATE LESSON
export const createLesson = async (lesson) => {
    
    const formData = new FormData();

    formData.append("title", lesson.title)
    formData.append("description", lesson.description)
    formData.append("videoUrl", lesson.videoUrl)
    formData.append("courseId", lesson.courseId)
    formData.append("durationInMinutes", lesson.durationInMinutes)

    const res = await fetch(baseUrl, {
        method: "POST",
        headers: authHeaders(),

        body: formData
    });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
};


// UPDATE LESSON
export const updateLesson = async (id, lesson) => {

    const res = await fetch(`${baseUrl}/${id}`,
        {
            method: "PATCH",

            headers: authHeaders(),

            body: lesson
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
};


// DELETE LESSON
export const deleteLesson = async (id) => {

    const res = await fetch(`${baseUrl}/${id}`,
        {
            method: "DELETE",
            headers: authHeaders()
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
};