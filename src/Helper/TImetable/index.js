import api from '../../config.json'
import { getToken } from '../Authentication/index'

const URL = api.timetable


export const getFacultyTimetable = ({ userId }) => {
    return fetch(`${URL}/faculty${(userId ? '?userId='+userId : '')}`, {
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