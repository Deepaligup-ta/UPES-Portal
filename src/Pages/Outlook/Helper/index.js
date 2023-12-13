const getGraph = (endpoint, token) => {
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
    headers.append("Authorization", bearer);
    const options = {
        method: "GET",
        headers: headers
    }
    return fetch(endpoint, options)
            .then(response => response.json())
            .catch(error => console.log(error));
    
}

const postGraph = (endpoint, token, body) => {
    const headers = new Headers()
    const bearer = `Bearer ${token}`
    headers.append("Authorization", bearer)
    headers.append("Content-Type", "application/json")
    const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    }
    return fetch(endpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error))
}

const DEFAULT_URL = "https://graph.microsoft.com/v1.0"

export const postFreeTime = (token, body) => {
    return postGraph(`${DEFAULT_URL}/me/calendar/getschedule`, token, body)
}

export const getEvents = (token) => {
    return getGraph(`${DEFAULT_URL}/me/calendar/getschedule`, token)
}