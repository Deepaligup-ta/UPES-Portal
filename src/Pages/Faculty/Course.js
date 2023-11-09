import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import { Space, notification } from "antd"
import { getCourses } from "../../Helper/Course"
import CourseCard from "../../Components/Basic/CourseCard"
import CardLoader from "../../Components/Basic/CardLoader"
import FacultyBase from "../../Components/Faculty/Base"


const FacultyCourse = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
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
                    return openNotification({ type: 'info', message: 'No Courses Found!'})
                setData(res)
                setLoading(false)
            })
    }, [setData])
    
    return(
        <FacultyBase>
        {contextHolder}
            <PageTitle title="Courses" />
            <Space />
            { loading ? <CardLoader /> : <CourseCard data={data} /> }
            <br />
        </FacultyBase>
    )
}

export default FacultyCourse