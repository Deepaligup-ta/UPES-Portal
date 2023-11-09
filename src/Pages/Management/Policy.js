import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { Space, Spin, notification } from "antd"
import { useLocation } from "react-router-dom"
import { getPolicies } from "../../Helper/Policy"
import PolicyCard from "../../Components/Basic/PolicyCard"
import CardLoader from '../../Components/Basic/CardLoader'
import { getPosts } from "../../Helper/Post"

const Policy = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
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
        document.title = "Policies | SoCIS"
        let success = query.get('success')
        if(success === "new") 
            openNotification({ type: "success", message: "Added New Policy!" })
        else if(success === "edit")
            openNotification({ type: "success", message: "Updated Policy!" })
        else if(success === "delete")
            openNotification({ type: "success", message: "Deleted Policy!" })
        getPosts(1, 'Policy')
            .then((data) => {
                if(data.error)
                    return openNotification({ type: 'error', message: 'Error Occured' })
                if(data.docs.length === 0)
                    return openNotification({ type: 'info', message: 'No Policies Found!'})
                setData(data.docs)
                setLoading(false)
            })
    }, [setLoading, setData, query])
  
    
    return(
        <ManagementBase>
        {contextHolder}
            <PageTitle title="Policies" />
            <Space />
            { loading ? <CardLoader /> : <PolicyCard data={data} /> }
            <br />
        </ManagementBase>
    )
}

export default Policy