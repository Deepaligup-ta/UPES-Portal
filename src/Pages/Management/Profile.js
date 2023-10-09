import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import { Skeleton, Spin, notification } from "antd"
import ProfileCard from "../../Components/Management/ProfileCard"
import { getUser, getUserById } from "../../Helper/Authentication"
import { useParams } from 'react-router-dom'
import PageTitle from "../../Components/Basic/PageTitle"

const ManagementProfile = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { userId } = useParams()
    const [api, context] = notification.useNotification()
    const openNotification = ({ type, message }) => {
        api[type]({
            message: message
        })
    }
    useEffect(() => {
        document.title = "Profile | SoCIS"
        if(userId) {
            getUserById(userId)
                .then((data) => {
                    console.log(data)
                    if(data.error)
                        return openNotification({type: 'error', message: 'Error Occured!'})
                    setData(data)
                    setLoading(false)
                })
                .catch((error) => {
                    return openNotification({type: 'error', message: 'Error Occured!'})
                })
        }else {
            getUser({ userId: false})
                .then((data) => {
                    if(data.error)
                        return openNotification({type: 'error', message: 'Error Occured!'})
                    setData(data)
                    setLoading(false)
                })
                .catch((error) => {
                    return openNotification({type: 'error', message: 'Error Occured!'})
                })
        }
    }, [setData, setLoading, setError])
    return(
        <ManagementBase>
            {context}
            <PageTitle title="Profile" />
            { loading ? <Skeleton active avatar  /> : <ProfileCard data={data} /> }
        </ManagementBase>
    )
}

export default ManagementProfile