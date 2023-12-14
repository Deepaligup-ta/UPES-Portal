import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import FacultyBase from '../../Components/Faculty/Base'
import { notification, Row, Col, Card, Button, Table } from "antd"
import { useLocation } from "react-router-dom"
import CardLoader from "../../Components/Basic/CardLoader"
import { getEvents } from "../Outlook/Helper"
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
                let datas = []
                result.value.map((item) => {
                    datas.push({ 
                        subject: item.subject,
                        priority: item.importance.toUpperCase(),
                        start: item.start.dateTime.split('.')[0],
                        end: item.end.dateTime.split('.')[0],
                        join: ''

                    })
                })
                setData(datas)
                setLoading(false)
            })
            .catch((error) => {
                openNotification({ type: 'error', message: 'Cannot Fetch Events From Outlook'})
                console.log(error)
            })
    }, [setData, query])
    const columns = [
        {
          title: 'Subject',
          dataIndex: 'subject',
          key: 'subject',
        },
        {
          title: 'Priority',
          dataIndex: 'priority',
          key: 'priority',
        },
        {
          title: 'Start',
          dataIndex: 'start',
          key: 'start',
        },
        {
            title: 'End',
            dataIndex: 'end',
            key: 'end',
        },
        {
            title: 'Join',
            dataIndex: 'join',
            key: 'join',
            render: (text) => <Button onClick={() => window.open(`${text}`, '_blank')}>Join Meeting</Button>

        }
    ]
      
    return(
        <FacultyBase>
        {contextHolder}
            <PageTitle title="Events/Meetings" />
            { console.log(data)}
            { loading ? <CardLoader /> : <Table loading={loading} columns={columns} dataSource={data}  />}
        </FacultyBase>
    )
}

export default FacultyEvents