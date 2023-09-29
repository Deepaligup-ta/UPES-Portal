import { course } from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = "http://localhost:8000/api/course"


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
        .catch((error) => {
          return error;
        });
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
        .catch((error) => {
          return error;
        });
}
