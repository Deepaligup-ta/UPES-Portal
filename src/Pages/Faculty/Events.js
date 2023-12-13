import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import FacultyBase from '../../Components/Faculty/Base'
import { notification } from "antd"
import { useLocation } from "react-router-dom"
import CardLoader from "../../Components/Basic/CardLoader"
import { getEvents, postFreeTime } from "../Outlook/Helper"
import { useMsal } from "@azure/msal-react"


const FacultyEvents = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [api, contextHolder] = notification.useNotification()
    const { instance } = useMsal()
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
        document.title = "Events/Meetings | SoCIS"
        let success = query.get('success')
        if(success === "new") 
            openNotification({ type: "success", message: "Added New Message!" })
        else if(success === "edit")
            openNotification({ type: "success", message: "Updated Message!" })
        else if(success === "delete")
            openNotification({ type: "success", message: "Deleted Message!" })
       
        getEvents(JSON.parse(sessionStorage.getItem('outlook')).accessToken)
            .then((result) => {
                console.log(result.value)
                setData(result.value)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData, query])
    
    return(
        <FacultyBase>
        {contextHolder}
            <PageTitle title="Events/Meetings" />
            { console.log(data)}
           
        </FacultyBase>
    )
}

export default FacultyEvents