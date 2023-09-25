import jwtDecode from 'jwt-decode';
import config from '../../config.json';

const URL = config.auth

const getAuthToken = () => {
  
    const regex = new RegExp(`(^| )socis=([^;]+)`)
    const match = document.cookie.match(regex)
    if (match) {
        let info = jwtDecode(match[2])
        return info
    }
    return false
   
}
const GET = (ENDPOINT, AUTH) => {
    return fetch(`${ENDPOINT}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${AUTH}`
        },
        method: "GET",
    })
    .then(res => res.json())
    .catch(error => {
        return error
    })
}

const PUT = (ENDPOINT, BODY, AUTH) => {
    return fetch(`${ENDPOINT}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${AUTH}`
        },
        method: "PUT",
        body: JSON.stringify(BODY)
    })
    .then(res => res.json())
    .catch(error => { 
        return error
     })
}

const POST = (ENDPOINT, BODY, AUTH) => {
    return fetch(`${ENDPOINT}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${AUTH}`
        },
        method: "POST",
        body: JSON.stringify(BODY)
    })
    .then(res => res.json())
    .catch(error => {
        return error
    })
}


export const signIn = (body) => {
    console.log(body)
    return fetch(`${URL}/signin`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        method: "POST",

        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(error => {
        return error
    })
}

export const logout = () => {
    // return fetch(`${URL}/signout`, {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },

    // })
}
export const isAuthenticated = () => {
    if(getAuthToken)
        return true
    else 
        return false
       
}
export const isFaculty = () => {
    if(!getAuthToken()) {
        return false
    } 
    if(getAuthToken().user.role === "admin" ){
        return true
    }
    if(getAuthToken().user.role === "faculty" ){
        return true
    }
    return false
   

}

export const isManagement = () => {
    if(getAuthToken().user.role === "admin" ){
        return true
    }
    if(getAuthToken().user.role === "management" ){
        return true
    }
    return false
}