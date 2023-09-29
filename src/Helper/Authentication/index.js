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
    .catch(error => {
        return error
    })
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
      .catch((error) => {
        return error;
      });
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
      mode: 'no-cors',

      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .catch((error) => {
        return error;
      });
}


export const logout = () => {
    return fetch(`${URL}/signout`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getAuthToken()}`
        },
        credetials: 'include',
        method: "GET"

    }).then((res) => res.json())
    .catch((error) => console.log(error))
}
export const isAuthenticated = () => {
    if(getAuthToken)
        return true
    else 
        return true
       
}
export const isFaculty = () => {
    if(!getAuthToken()) {
        return true
    } 
    if(getAuthToken().user.role === "admin" ){
        return true
    }
    if(getAuthToken().user.role === "faculty" ){
        return true
    }
   

}

export const isManagement = () => {
    if(getAuthToken().user.role === "admin" ){
        return true
    }
    if(getAuthToken().user.role === "management" ){
        return true
    }
}