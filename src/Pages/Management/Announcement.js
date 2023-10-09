import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { Pagination, Space, notification } from "antd"
import { getAnnouncements } from "../../Helper/Announcement/index.js"
import AnnouncementCard from "../../Components/Basic/AnnouncementCard"
import { useLocation } from "react-router-dom"
import CardLoader from "../../Components/Basic/CardLoader"


const MangementAnnouncement = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [info, setInfo]= useState({})
    const [api, contextHolder] = notification.useNotification()

    const openNotification = ({ type, message }) => {
      api[type]({
        message: message,
      })
    }
    const useQuery = () => {
        const { search } = useLocation()
        return React.useMemo(() => new URLSearchParams(search), [search])
    }
    const query = useQuery()
    useEffect(() => {
        document.title = "Announcements | SoCIS"
        let success = query.get('success')
        if(success === "new") 
            openNotification({ type: "success", message: "Added New Announcement!" })
        else if(success === "edit")
            openNotification({ type: "success", message: "Updated Announcement!" })
        else if(success === "delete")
            openNotification({ type: "success", message: "Deleted Announcement!" })
        getAnnouncements(1)
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
    }, [setData, setInfo, query])
    
    const changePage = (page) => {
        setLoading(true)
        getAnnouncements(page)
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
        <ManagementBase>
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
        </ManagementBase>
    )
}

export default MangementAnnouncement