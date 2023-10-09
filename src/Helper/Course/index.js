import api from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = api.course


export const getCourse = (params) => {
    return fetch(`${URL}/course/${params.courseId}`, {
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

export const getCourses = () => {
    return fetch(`${URL}/courses`, {
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