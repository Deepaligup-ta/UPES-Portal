import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import { Pagination, notification, List, Badge } from "antd"
import { useLocation, Link } from "react-router-dom"
import CardLoader from "../../Components/Basic/CardLoader"
import { getPosts } from "../../Helper/Post"
import { getAuthToken } from "../../Helper/Authentication"
import ManagementBase from "../../Components/Management/Base"


const ManagementPost = () => {
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
        document.title = "Post | SoCIS"
        let success = query.get('success')
        if(success === "new") 
            openNotification({ type: "success", message: "Added New Post!" })
        else if(success === "edit")
            openNotification({ type: "success", message: "Updated Post!" })
        else if(success === "delete")
            openNotification({ type: "success", message: "Deleted Post!" })
        getPosts(1)
            .then((res) => {
                if(res.error)
                    return openNotification({ type: 'error', message: 'Error Occurred!'})
                if(res.docs.length === 0)
                    return openNotification({ type: 'info', message: 'No Posts Found!'})
                setInfo(res)
                setData(res.docs)
                setLoading(false)
            })
            .catch((error) => {
                return openNotification({ type: 'error', message: 'Error Occurred!'})
            })
    }, [setData, setInfo, query])
    
    const changePage = (page) => {
        setLoading(true)
        getPosts(page)
            .then((res) => {
                console.log(res)
                setInfo(res)
                setData(res.docs)
                setLoading(false)
            })
            .catch((error) => {
                return openNotification({ type: 'error', message: 'Error Occurred!'})
            })
    }
    
    return(
        <ManagementBase>
        {contextHolder}
            <PageTitle title="Posts" />
            <br/>
            <br/>
            { 
                loading ? <CardLoader /> : 
                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <Badge.Ribbon key={index} text={`Published By ${item.author.firstName} On ${item.createdAt.split('T')[0]}`}>
                            <List.Item 
                                style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}
                                actions={[
                                    <Link style={{ visibility: (item.author.sapId === getAuthToken().user.sapId ? 'visible' : 'hidden')}} to={`/management/post/new?id=${item._id}`}>Edit</Link>
                                ]}
                            >
                                <List.Item.Meta
                                    // avatar={
                                    //     <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                                    // }
                                    title={<Link to={`${item._id}`}>{item.title}</Link>}
                                    description={item.excerpt}
                                />
                            </List.Item>
                        </Badge.Ribbon>
                    )}
                />            
            }
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

export default ManagementPost