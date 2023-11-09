import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { Pagination, Space, notification } from "antd"
import { getAnnouncements } from "../../Helper/Announcement/index.js"
import AnnouncementCard from "../../Components/Basic/AnnouncementCard"
import CardLoader from "../../Components/Basic/CardLoader"
import FacultyBase from "../../Components/Faculty/Base"
import { getPost, getPosts } from "../../Helper/Post"


const FacultyAnnouncement = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [info, setInfo]= useState({})
    const [api, contextHolder] = notification.useNotification()

    const openNotification = ({ type, message }) => {
      api[type]({
        message: message,
      })
    }
   
    useEffect(() => {
        document.title = "Announcements | SoCIS"
        getPosts(1, 'Announcement')
            .then((res) => {
                if(res.error)
                    return openNotification({ type: 'error', message: 'Error Occurred!'})

                if(res.docs.length === 0)
                    return openNotification({ type: 'info', message: 'No Announcements Found!'})
                setInfo(res)
                setData(res.docs)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData, setInfo])
    
    const changePage = (page) => {
        setLoading(true)
        getPosts(page, 'Announcement')
            .then((res) => {
                setInfo(res)
                setData(res.docs)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    return(
        <FacultyBase>
        {contextHolder}
            <PageTitle title="Announcements" />
            <Space />
            { loading ? <CardLoader /> : <AnnouncementCard data={data} /> }
            <br />
            <Pagination 
                current={info.page} 
                pageSize={1}
                onChange={(page) => changePage(page)}
                total={info.totalPages}
                style={{ alignSelf: 'center'}}
            />
        </FacultyBase>
    )
}

export default FacultyAnnouncement