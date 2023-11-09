import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { Pagination, Space, notification } from "antd"
import { getMessages } from "../../Helper/Message/index.js"
import MessageCard from "../../Components/Basic/MessageCard"
import { useLocation } from "react-router-dom"
import CardLoader from "../../Components/Basic/CardLoader"
import { getPosts } from "../../Helper/Post"


const ManagementMessage = () => {
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
        document.title = "Messages | SoCIS"
      
        getPosts(1, 'Message')
            .then((res) => {
                if(res.error)
                    return openNotification({ type: 'error', message: 'Error Occurred!'})
                if(res.docs.length === 0)
                    return openNotification({ type: 'info', message: 'No Messages Found!'})
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
        getPosts(page, 'Message')
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
            <PageTitle title="Messages" />
            <Space />
            { loading ? <CardLoader /> : <MessageCard data={data} /> }
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

export default ManagementMessage