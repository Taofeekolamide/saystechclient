import { API_URL } from "../Api/api";
import { ResponseStatus } from "../Api/ResponseStatus";

const BASE_URL = `${API_URL}/Payment`

const getToken = () => JSON.parse(localStorage.getItem("saystechauth"));
const authHeaders = () => ({"Content-Type": "application/json", Authorization: `Bearer ${getToken().accessToken}` });

export const initializePayment = async (courseId) => {

    const response = await fetch(`${BASE_URL}/Initialize`, {
        method: "POST",
        headers: authHeaders(),

        body: JSON.stringify({ courseId: courseId })
    })

    ResponseStatus(response)

    const data = await response.json()

    if (data.success)
        return data

    throw new Error(data.message)
}


export const VerifyPayment = async (reference) => {

    const response = await fetch(`${BASE_URL}/Verify/${reference}`, {
        headers: authHeaders()
    });

    ResponseStatus(response)

    const data = await response.json()

    if (data.success)
        return data

    throw new Error(data.message)

}


