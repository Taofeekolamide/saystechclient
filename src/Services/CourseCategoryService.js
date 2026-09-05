import { API_URL } from "../Api/api.js";
import { ResponseStatus } from "../Api/ResponseStatus.js";

const baseUrl = `${API_URL}/CourseCategory`;

const getToken = () => JSON.parse(localStorage.getItem("saystechauth"));
const authHeaders = () => ({ Authorization: `Bearer ${getToken().accessToken}` });

// GET ALL CATEGORIES
export const getCategories = async () => {
    const res = await fetch(`${baseUrl}`, {
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



// GET CATEGORY BY ID
export const getCategory = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`, {
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



// CREATE CATEGORY
export const createCategory = async (category) => {

    const formData = new FormData();
    formData.append("name", category.name)
    formData.append("description", category.description)
    formData.append("imageUrl", category.imageUrl)

    const res = await fetch(`${baseUrl}`, {
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



// UPDATE CATEGORY
export const updateCategory = async (id, category) => {

    const formData = new FormData();

    formData.append("name", category.name);

    formData.append("description", category.description || "");

    if (category.imageUrl) {
        formData.append("imageUrl", category.imageUrl);
    }

    const response = await fetch(`${API_URL}/${id}`,
        {
            method: "PATCH",
            headers: authHeaders(),

            body: formData
        }
    );

    ResponseStatus(response);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);

};


// DELETE CATEGORY
export const deleteCategory = async (id) => {

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