import { API_URL } from "../Api/api.js";
import { ResponseStatus } from "../Api/ResponseStatus.js";

const baseUrl = `${API_URL}/Course`;

const getToken = () => JSON.parse(localStorage.getItem("saystechauth"));
const authHeaders = () => ({ Authorization: `Bearer ${getToken().accessToken}` });

// GET ALL COURSES
export const getCourses = async () => {

    const res = await fetch(baseUrl, {
        method: "GET",
        headers: authHeaders(),
    });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);

};


// GET COURSE BY ID
export const getCourse = async (id) => {

    const response = await fetch(`${baseUrl}/${id}`, {
        method: "GET",
        headers: authHeaders(),
    });

    ResponseStatus(response);

    const data = await response.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);

};


// GET COURSES BY CATEGORY
export const getCoursesByCategory = async (categoryId) => {

    const res = await fetch(`${baseUrl}/Category/${categoryId}`, {
        method: "GET",
        headers: authHeaders(),
    });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);

};


// CREATE COURSE
export const createCourse = async (course) => {

    const formData = new FormData();

    formData.append("title", course.title);

    formData.append("description", course.description || "");

    formData.append("price", course.price);

    formData.append("durationInHours", course.durationInHours);

    formData.append("level", course.level);

    formData.append("categoryId", course.categoryId);

    if (course.thumbnail) {
        formData.append("thumbnail", course.thumbnail);
    }

    const res = await fetch(baseUrl,
        {
            method: "POST",
            headers: authHeaders(),

            body: formData
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);

};


// UPDATE COURSE
export const updateCourse = async (id, course) => {

    const formData = new FormData();

    formData.append("title", course.title);

    formData.append("description", course.description || "");

    formData.append("price", course.price);

    formData.append("durationInWeeks", course.durationInHours);

    formData.append("level", course.level);

    formData.append("categoryId", course.categoryId);

    formData.append("tutorId", course.tutorId);

    if (course.thumbnail) {
        formData.append("thumbnail", course.thumbnail);
    }

    const res = await fetch(`${baseUrl}/${id}`,
        {
            method: "PATCH",
            headers: authHeaders(),

            body: formData
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);

};


// DELETE COURSE
export const deleteCourse = async (id) => {

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