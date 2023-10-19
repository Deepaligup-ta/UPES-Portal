import jwtDecode from 'jwt-decode';
import config from '../../config.json';

const URL = config.auth

export const getAuthToken = () => {
  
    const regex = new RegExp(`(^| )socis=([^;]+)`)
    const match = document.cookie.match(regex)
    if (match) {
        let info = jwtDecode(match[2])
        return info
    }
    return false
   
}
export const getToken = () => {
    const regex = new RegExp(`(^| )socis=([^;]+)`)
    const match = document.cookie.match(regex)
    if (match) {
        return match
    }
    return false
}


export const signIn = (body) => {
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
    .catch((error) =>  error);

}

export const getAllUsers = () => {

  return fetch(`${URL}/allusers`, {
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${getToken()[2]}`,
    },
    credentials: "include",
    method: "GET",

  })
    .then((res) => res.json())
    .catch((error) =>  error);
}

export const getUsers = (params) => {

    return fetch(`${URL}/users?page=${params.page}`, {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${getToken()[2]}`,
      },
      credentials: "include",
      method: "GET",

    })
      .then((res) => res.json())
      .catch((error) =>  error);
}

export const getUserById = (userId) => {

    return fetch(`${URL}/user/${userId}`, {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${getToken()[2]}`,
      },
      credentials: "include",
      method: "GET",

    })
      .then((res) => res.json())
      .catch((error) =>  error);

}

export const getUser = () => {

    return fetch(`${URL}/current`, {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${getToken()[2]}`,
      },
      credentials: "include",
      method: "GET",

    })
      .then((res) => res.json())
      .catch((error) =>  error);

}
export const uploadPicture = (body) => {
    return fetch(`${URL}/profilepic`, {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${getToken()[2]}`,
      },
      credentials: "include",
      method: "PUT",
      body: JSON.stringify(body)

    })
      .then((res) => res.json())
      .catch((error) =>  error);

}


export const getPicture = (params) => {
    return fetch(`${URL}/profilepic?userId=${params.userId}`, {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${getToken()[2]}`,
      },
      credentials: "include",
      method: "GET",

    })
      .then((res) => res.json())
      .catch((error) =>  error);

}

export const changePassword = (body) => {

    return fetch(`${URL}/change-password`, {
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${getToken()[2]}`,
      },
      credentials: "include",
      method: "PUT",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .catch((error) => error);

}


export const signout = () => {
    return fetch(`${URL}/signout`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()[2]}`
        },
        credetials: 'include',
        method: "POST"

    }).then((res) => res.json())
    .catch((error) => error);
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
   

}

export const isManagement = () => {
   if(!getAuthToken())
        return false
    if(getAuthToken().user.role === "admin" ){
        return true
    }
    if(getAuthToken().user.role === "management" ){
        return true
    }
}