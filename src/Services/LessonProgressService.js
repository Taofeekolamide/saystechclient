import { API_URL } from "../Api/api";
import { ResponseStatus } from "../Api/ResponseStatus";

const baseUrl = `${API_URL}/LessonProgress`;

const getToken = () => JSON.parse(localStorage.getItem("saystechauth"));
const authHeaders = () => ({ "Content-Type": "application/json", Authorization: `Bearer ${getToken().accessToken}` });


// Create progress when a lesson starts
export const startLesson = async (lessonId) => {

    const response = await fetch(`${baseUrl}/AddProgress`,
        {
            method: "POST",
            headers: authHeaders(),

            body: JSON.stringify({ lessonId: lessonId })
        }
    );

    ResponseStatus(response);

    const data = await response.json();

    return
    if (data.success) {
        return data
    }

    throw new Error(data.message);
}


// Save current video position
export const updateProgress = async (lessonId, watchedSeconds) => {
    const response = await fetch(`${baseUrl}/UpdateProgress`,
        {
            method: "PATCH",
            headers: authHeaders(),

            body: JSON.stringify({ lessonId: lessonId, watchedSeconds: watchedSeconds })
        }
    );

    ResponseStatus(response);

    const data = await response.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}


// Mark lesson as completed
export const completeLesson = async (lessonId) => {
    const response = await fetch(`${baseUrl}/CompleteProgress`,
        {
            method: "PATCH",
            headers: authHeaders(),
            body: JSON.stringify({ lessonId: lessonId })
        }
    );

    ResponseStatus(response);

    const data = await response.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}
