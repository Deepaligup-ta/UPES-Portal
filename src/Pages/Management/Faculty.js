import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { Pagination, Space, notification } from "antd"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import TableCard from "../../Components/Basic/Table"
import { getUsers } from "../../Helper/Authentication"


const Faculty = () => {
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
        document.title = "Faculty | SoCIS"
        getUsers({ page: 1 })
            .then((res) => {
                if(res.error)
                    return openNotification({type: 'error', message: 'Error Occurred!'})
                setInfo(res)
                setData(res.docs)
                setLoading(false)
            })
            .catch((error) => {
                return openNotification({type: 'error', message: 'Error Occurred!'})
            })
    }, [setData, setInfo, query])
    
    const changePage = (page) => {
        setLoading(true)
        getUsers({page: page})
            .then((res) => {
                if(res.error)
                    return openNotification({type: 'error', message: 'Error Occurred!'})
                setInfo(res)
                setData(res.docs)
                setLoading(false)
            })
            .catch((error) => {
                return openNotification({type: 'error', message: 'Error Occurred!'})
            })
    }
    const columns = [
        {
            title: 'SAP ID',
            dataIndex: 'sapId',
            key: 'sapId',
        },
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Reporting Manager Name',
            dataIndex: ['reportingManager','firstName'],
            key: 'reportingManger.firstName',
        },
        {
            title: 'Reporting Manager SAPID',
            dataIndex: ['reportingManager','sapId'],
            key: 'reportingManger.firstName',
        },
        {
            title: 'Actions',
            dataIndex: '_id',
            key: '_id',
            render: (text) => <div><Link to={`${text}`}>Profile</Link> | <Link key={text} to={`/management/timetable?userId=${text}`}>Timetable</Link></div>
        }
    ]
    return(
        <ManagementBase>
        {contextHolder}
            <PageTitle title="Faculty" />
            <Space />
            {/* { loading ? <Spin style={{ textAlign: 'center', justifyContent: 'center'}} /> : <TableCard loading={loading} columns={columns} data={data} /> } */}
            <TableCard loading={loading} columns={columns} data={data} />
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

export default Faculty