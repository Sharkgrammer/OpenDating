import * as utils from "./utility.ts";

export async function login(user: any) {

    const res: Response = await fetch(`${import.meta.env.VITE_BACKEND_API}token/`, {
        "method": "POST",
        "headers": {
            'Content-Type': 'application/json'
        },
        "body": JSON.stringify(user)
    })

    const status: number = res.status;

    if (status === 200) {
        const data: any = await res.json();

        utils.setAccessKey(data.access);
        utils.setRefreshKey(data.refresh);

        return true;
    } else {
        return false;
    }

}

export async function refresh() {

    let data: any = {
        refresh: utils.getRefreshKey()
    }

    const res: Response = await fetch(`${import.meta.env.VITE_BACKEND_API}token/refresh/`, {
        "method": "POST",
        "headers": {
            'Content-Type': 'application/json'
        },
        "body": JSON.stringify(data)
    })

    const status: number = res.status;

    if (status === 200) {
        const data: any = await res.json();

        utils.setAccessKey(data.access);
        utils.setRefreshKey(data.refresh);

        return true;
    } else {
        return false;
    }

}

export async function checkStatus(status: number, data: any) {
    if (status == 200) {

        if (!data) {
            return false;
        }

        return data;
    } else if (status == 401) {

        let refreshed: boolean = await refresh();

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

export async function NetworkRequest(urlEnd: string, type: string = "GET", body: any = null, params: any = null, isJSON: boolean = true, skipLogin: boolean = false, exit: boolean = false) {
    let url = `${import.meta.env.VITE_BACKEND_API}${urlEnd}`;

    if (params === null) params = "{}";
    if (body === null) body = "{}";

    let input: string = `${url}${utils.params(params)}`;

    let init: any = {
        "method": type,
        "headers": {}
    }

    if (!skipLogin) {
        init.headers["Authorization"] = 'Bearer ' + utils.getAccessKey();
    }

    switch (type) {
        case "GET":
            // Nothing here yet
            break;
        case "PUT":
            init.headers["Content-Disposition"] = "attachment";
            init.body = body;
            break
        case "POST":
            init.body = JSON.stringify(body);
            break;
    }

    let result: boolean = false;

    try {
        const res: Response = await fetch(input, init);

        let data: any;

        if (isJSON) {
            data = await res.json();
        } else {
            data = await res.text();
        }

        const status = res.status;

        result = await checkStatus(status, data);
    } catch (e) {
        //console.log(e)
        return false;
    }

    if (!result && !exit) {
        return await NetworkRequest(urlEnd, type, body, params, isJSON, skipLogin, true);
    } else {
        return result;
    }
}