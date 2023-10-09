import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { getCourses } from "../../Helper/Course"
import CourseCard from "../../Components/Basic/CourseCard"
import CardLoader from "../../Components/Basic/CardLoader"


const Course = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
        document.title = "Courses | SoCIS"
        getCourses()
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData])
    
    return(
        <ManagementBase>
            <PageTitle title="Courses" />
            { loading ? <CardLoader /> : <CourseCard data={data} /> }
            <br />
        </ManagementBase>
    )
}

export default Course