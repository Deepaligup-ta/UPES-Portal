import config from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = config.message

export const newMesssage = (body) => {
    return fetch(`${URL}/new`, {
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${getToken()[2]}`,
        },
        credentials: "include",
        method: "POST",  
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .catch((error) => error.json());

}

export const editMessage = (body) => { // body = { annoucement structure }

    return fetch(`${URL}/update`, {
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
        .catch((error) => error.json());

}

export const deleteMessage = (body) => { /// body = { announcementId: "ID" }
    return fetch(`${URL}/delete`, {
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${getToken()[2]}`,
        },
        credentials: "include",
        method: "DELETE",  
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .catch((error) => error.json());

}

export const getMessage = (params) => {
    return fetch(`${URL}/message/${params.messageId}`, {
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${getToken()[2]}`,
        },
        credentials: "include",
        method: "GET",  
      })
        .then((res) => res.json())
        .catch((error) => error.json());

}

export const getMessages = (page) => {
    
    return fetch(`${URL}/all?page=${page}`, {
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json",
          'Authorization': `Bearer ${getToken()[2]}`,
        },
        credentials: "include",
        method: "GET",  
      })
        .then((res) => res.json())
        .catch((error) => error.json());

}