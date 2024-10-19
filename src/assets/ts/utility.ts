import {router} from "../../Router.tsx";

// Taken from mozilla docs
export function getCookie(name: string) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export function params(params: any) {

    if (params === "{}") {
        return "";
    }

    let result = "?";
    let count = 0;
    let len = Object.keys(params).length

    for (let key in params) {
        let val = params[key];

        result += key + "=" + val;

        if (count < len - 1) {
            result += "&";
        }

        count += 1;
    }

    return result;
}

export function setAccessKey(access: string) {
    localStorage.setItem("access", access);
}

export function getAccessKey() {
    return localStorage.getItem("access");
}

export function setRefreshKey(refresh: string) {
    localStorage.setItem("refresh", refresh);
}

export function getRefreshKey() {
    return localStorage.getItem("refresh");
}

export function setLocalUID(uid: string) {
    localStorage.setItem("uid", uid);
}

export function getLocalUID() {
    return localStorage.getItem("uid");
}

export async function redirectToLogin() {
    await router.navigate("/login", {replace: true});
}

export async function logout() {
    console.log("Logout ran");
    localStorage.clear()

    await redirectToLogin();
}