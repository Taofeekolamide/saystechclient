import { API_URL } from "../Api/api";
import { ResponseStatus } from "../Api/ResponseStatus";

const baseUrl = `${API_URL}/Auth`;

export const login = async (form) => {
    const res = await fetch(`${baseUrl}/Login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}


export const register = async (form) => {
    const res = await fetch(`${baseUrl}/Register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    });

    ResponseStatus(res);

    const data = await res.json()

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}


export const verifyEmail = async (email, code) => {

    const res = await fetch(`${baseUrl}/Verify-Email`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, token: code }),
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}


export const resendVerifyEmail = async (email) => {

    const res = await fetch(`${baseUrl}/Resend-Verification`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}

export const forgotPassword = async (email) => {
    const res = await fetch(`${baseUrl}/Forgot-Password`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email }),
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
};

export const verifyPasswordResetCode = async (email, code) => {

    const res = await fetch(`${baseUrl}/Verify-Password-Token`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, token: code }),
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
}

export const resetPassword = async (form) => {
    const res = await fetch(`${baseUrl}/Reset-Password`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        }
    );

    ResponseStatus(res);

    const data = await res.json();

    if (data.success) {
        return data
    }

    throw new Error(data.message);
};