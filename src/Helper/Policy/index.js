import { policy } from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = "http://localhost:8000/api/policy"

export const newPolicy = (body) => {
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

export const editPolicy = (body) => { // body = { annoucement structure }
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

export const deletePolicy = (body) => { /// body = { policyId: "ID" }
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
          console.log(error);
          return error;
        
        });
}

export const getPolicy = (params) => {
    return fetch(`${URL}/policy/${params}`, {
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

export const getPolicies = () => {
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