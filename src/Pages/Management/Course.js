import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { getCourses } from "../../Helper/Course"
import CourseCard from "../../Components/Basic/CourseCard"
import CardLoader from "../../Components/Basic/CardLoader"
import {  notification } from "antd"


const Course = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [api, contextHolder] = notification.useNotification()

    const openNotification = ({ type, message }) => {
      api[type]({
        message: message,
      })
    }
    useEffect(() => {
        document.title = "Courses | SoCIS"
        getCourses()
            .then((res) => {
                if(res.error)
                    return openNotification({ type: 'error', message: 'Error Occurred!'})

                if(res.length === 0)
                    return openNotification({ type: 'info', message: 'No Announcements Found!'})
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData])
    
    return(
        <ManagementBase>
        {contextHolder}
            <PageTitle title="Courses" />
            { loading ? <CardLoader /> : <CourseCard data={data} /> }
            <br />
        </ManagementBase>
    )
}

export default Course