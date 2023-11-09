import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import { Space, notification } from "antd"
import { getPolicies } from "../../Helper/Policy"
import PolicyCard from "../../Components/Basic/PolicyCard"
import CardLoader from '../../Components/Basic/CardLoader'
import FacultyBase from "../../Components/Faculty/Base"
import { getPosts } from "../../Helper/Post"

const FacultyPolicy = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [api, contextHolder] = notification.useNotification()

    const openNotification = ({ type, message }) => {
      api[type]({
        message: message,
      })
    }
  
    useEffect(() => {
        document.title = "Policies | SoCIS"
        getPosts(1, 'Policy')
            .then((data) => {
                if(data.error)
                    return openNotification({ type: 'error', message: 'Error Occured' })
                if(data.docs.length == 0)
                    return openNotification({ type: 'info', message: 'No Policies Found!'})
                setData(data.docs)
                setLoading(false)
            })
    }, [setLoading, setData])
  
    
    return(
        <FacultyBase>
        {contextHolder}
            <PageTitle title="Policies" />
            <Space />
            { loading ? <CardLoader /> : <PolicyCard data={data} /> }
            <br />
        </FacultyBase>
    )
}

export default FacultyPolicy