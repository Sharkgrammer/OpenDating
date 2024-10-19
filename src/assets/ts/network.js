import * as utils from "./utility.ts";

export async function login(context, user) {

    const res = await fetch(context._backend_url + "/api/v1/token/", {
        "method": "POST",
        "headers": {
            'Content-Type': 'application/json'
        },
        "body": JSON.stringify(user)
    })

    const status = res.status;

    if (status === 200) {
        const data = await res.json();

        utils.setAccessKey(context, data.access);
        utils.setRefreshKey(context, data.refresh);

        return true;
    } else {
        return false;
    }

}

export async function refresh(context) {

    let data = {
        refresh: utils.getRefreshKey(context)
    }

    const res = await fetch(context._backend_url + "/api/v1/token/refresh/", {
        "method": "POST",
        "headers": {
            'Content-Type': 'application/json'
        },
        "body": JSON.stringify(data)
    })

    const status = res.status;

    if (status === 200) {
        const data = await res.json();

        utils.setAccessKey(context, data.access);
        utils.setRefreshKey(context, data.refresh);

        return true;
    } else {
        return false;
    }

}

export async function checkStatus(context, status, data) {
    if (status === 200) {

        if (data === "False") {
            return false;
        }

        return data;
    } else if (status === 401) {

        let refreshed = await refresh(context);

        if (refreshed) {
            return true;
        } else {
            await utils.redirectToLogin();
            return false;
        }

    } else {
        return false;
    }
}

export async function NetworkRequest(context, urlEnd, type = "GET", body = null, params = null, isJSON = true, skipLogin = false) {
    let url = context._backend_url + urlEnd;

    if (params === null) params = "{}";
    if (body === null) body = "{}";

    let input = url + utils.params(params)
    let init = {
        "method": type,
        "headers": {}
    }

    if (!skipLogin) {
        init.headers["Authorization"] = 'Bearer ' + utils.getAccessKey(context)
    }

    switch (type) {
        case "GET":
            // Nothing here yet
            break;
        case "PUT":
            init.headers["Content-Disposition"] = "attachment"
            init.body = body
            break
        case "POST":
            init.body = JSON.stringify(body)
            break;
    }

    let result = false;

    try {
        const res = await fetch(input, init).catch(() => {
            //console.log(error)
            return false
        });

        let data = "";

        if (isJSON) {
            data = await res.json();
        } else {
            data = await res.text();
        }

        const status = res.status;

        result = await checkStatus(context, status, data);
    } catch (e) {
        //console.log(e)
        return false;
    }

    if (result === true) {
        return await NetworkRequest(context, urlEnd, type, body, params, JSON)
    } else {
        return result
    }
}

// TODO why? :(
// Moved here to try to fix a bug
export function updateUser(context, data) {
    utils.setFirstName(context, data.first_name);
    utils.setLastName(context, data.last_name);
    utils.setUsername(context, data.username);
    utils.setFollowing(context, data.following);
    utils.setFollowers(context, data.followers);
    utils.setProfImage(context, data.prof_image);
    utils.setVerified(context, data.verified);
    utils.setAnnoy(context, data.annoy);
}