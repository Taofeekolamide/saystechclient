import { API_URL } from "../Api/api";
import { ResponseStatus } from "../Api/ResponseStatus";

const baseUrl = `${API_URL}/Enrollment`;

const getToken = () => JSON.parse(localStorage.getItem("saystechauth"));
const authHeaders = () => ({ Authorization: `Bearer ${getToken().accessToken}` });

// GET USER ENROLLMENTS
export const getMyEnrollments = async () => {

    const response = await fetch(`${baseUrl}/My-Courses`,
        {
            method: "GET",
            headers: authHeaders()
        }
    );

    ResponseStatus(response)

    const data = await response.json()

    if (data.success)
        return data

    throw new Error(data.message)
};


export const getCompletedEnrollments = async () => {

    const response = await fetch(`${baseUrl}/CompletedCourses`,
        {
            method: "GET",
            headers: authHeaders()
        }
    );

    ResponseStatus(response)

    const data = await response.json()

    if (data.success)
        return data

    throw new Error(data.message)
};




// GET ENROLLMENT BY COURSE
export const getEnrollmentByCourse = async (courseId) => {

    const response = await fetch(`${baseUrl}/Learn/${courseId}`,
        {
            method: "GET",
            headers: authHeaders()
        }
    );

    ResponseStatus(response)

    const data = await response.json()

    if (data.success)
        return data

    throw new Error(data.message);
};