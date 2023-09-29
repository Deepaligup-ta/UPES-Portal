import { timetable } from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = timetable


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