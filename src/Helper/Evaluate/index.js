import api from '../../config.json'
import { getToken } from '../Authentication/index'


const URL = api.evaluate

export const getResults = (body) => {
  return fetch(`${URL}/result`, {
    headers: {
      'Accept': "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${getToken()[2]}`,
    },
    credentials: "include",
    method: "POST",  
    body: JSON.stringify(body),
  })
    .then((res) => res.blob())
    .catch((error) => console.log(error));
}

export const newResult = (body) => {
  return fetch(`${URL}/submit`, {
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
      .catch((error) => console.log(error));

}
export const getResult = (body) => {
  return fetch(`${URL}/getresult`, {
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
      .catch((error) => console.log(error));

}


export const getOne = (params) => {
    return fetch(`${URL}/${params.courseId}`, {
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

export const getAll = (type) => {

    return fetch(`${URL}/all${(type === 'management' ? '?all=true' : '')}`, {
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