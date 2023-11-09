import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import {  Space } from "antd"
import { useParams } from "react-router-dom"
import FullAnnouncement from "../../Components/Basic/FullAnnouncement"
import FacultyBase from "../../Components/Faculty/Base"
import CardLoader from "../../Components/Basic/CardLoader"
import { getPost } from "../../Helper/Post"

const ViewAnnouncement = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        document.title = "View Announcement | SoCIS"
        getPost({ postId: id })
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData ])
   
    
    return(
        <FacultyBase>
            <PageTitle title="Announcement" />
            <Space />
            { loading ? <CardLoader /> : <FullAnnouncement data={data} /> }
           
        </FacultyBase>
    )
}

export default ViewAnnouncement