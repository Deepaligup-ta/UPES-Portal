import { announcement } from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = announcement

export const newAnnouncement = (body) => {
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
        .catch((error) => {
          return error;
        });
}

export const editAnnouncement = (body) => { // body = { annoucement structure }
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
        .catch((error) => {
          return error;
        });
}

export const deleteAnnouncement = (body) => { /// body = { announcementId: "ID" }
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
        .catch((error) => {
          return error;
        });
}

export const getAnnouncement = (params) => {
    return fetch(`${URL}/announcement/${params.announcementId}`, {
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

export const getAnnouncements = () => {
    return fetch(`${URL}/all`, {
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