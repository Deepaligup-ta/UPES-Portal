import { timetable } from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = "http://localhost:8000/api/timetable"


export const getFacultyTimetable = () => {
    return fetch(`${URL}/faculty`, {
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

export const getTimetable = (params) => {
  
  // convert params into string
  params = params.toString();

  return fetch(`${URL}/faculty?userId=${params}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()[2]}`,
    },
    credentials: "include",
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
     
      
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};
