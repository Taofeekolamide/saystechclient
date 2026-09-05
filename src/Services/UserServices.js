import { API_URL } from "../Api/api";
import { ResponseStatus } from "../Api/ResponseStatus";

const baseUrl = `${API_URL}/User`;

const getToken = () => JSON.parse(localStorage.getItem("saystechauth"));

export const GetUser = async () => {

    const res = await fetch(`${baseUrl}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken().accessToken}`
        }
    });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}


export const UpdateUser = async (form) => {

    const formData = new FormData()

    formData.append("phoneNumber", form.phoneNumber)

    if (form.profilePicture) {
        formData.append("profilePicture", form.profilePicture);
    }

    formData.append("firstName", form.firstName)
    formData.append("lastName", form.lastName)

    const res = await fetch(`${baseUrl}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${getToken().accessToken}`
        },
        body: formData
    });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}