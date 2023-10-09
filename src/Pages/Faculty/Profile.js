import React, { useEffect, useState } from "react"
import { Spin, notification } from "antd"
import ProfileCard from "../../Components/Management/ProfileCard"
import { getUser } from "../../Helper/Authentication"
import FacultyBase from "../../Components/Faculty/Base"

const FacultyProfile = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [api, context] = notification.useNotification()
    const openNotification = ({ type, message }) => {
        api[type]({
            message: message
        })
    }
    useEffect(() => {
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
        
    }, [setData, setLoading, setError])
    return(
        <FacultyBase>
            {context}
            { loading ? <Spin /> : <ProfileCard data={data} /> }
        </FacultyBase>
    )
}

export default FacultyProfile