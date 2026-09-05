export const ResponseStatus = (response) => {

    if (response.status === 401) {
        localStorage.removeItem("saystechauth");
        window.location.href = "/login"
        throw new Error('Unauthorized: Please log in again.');
    }

    if (response.status === 403) {
        throw new Error('Forbidden: You do not have permission to access this resource.');
    }

    if (response.status === 500) {
        throw new Error('Server Error');
    }
};