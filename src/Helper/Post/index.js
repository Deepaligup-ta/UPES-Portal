import config from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = config.post

export const newPost = (body) => {
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

export const editPost = (body) => { // body = { annoucement structure }

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

export const deletePost = (body) => { /// body = { announcementId: "ID" }
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

export const getPost = (params) => {
    return fetch(`${URL}/post/${params.postId}`, {
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

export const getPosts = (page, type) => {
    
    return fetch(`${URL}/all?page=${page}&type=${type}`, {
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