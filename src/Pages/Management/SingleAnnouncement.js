import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { Skeleton } from "antd"
import { getAnnouncement } from "../../Helper/Announcement"
import { useParams } from "react-router-dom"
import FullAnnouncement from "../../Components/Basic/FullAnnouncement"


const SingleAnnouncement = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        document.title = "View Announcement | SoCIS"
        getAnnouncement({ announcementId: id })
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData ])
   
    
    return(
        <ManagementBase>
            <PageTitle title="Announcement" />
            { loading ? <Skeleton active /> : <FullAnnouncement data={data} /> }
           
        </ManagementBase>
    )
}

export default SingleAnnouncement