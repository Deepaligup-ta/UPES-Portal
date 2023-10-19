import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import { Form , Button, Input, Spin, notification, Skeleton} from 'antd'
import PageTitle from "../../Components/Basic/PageTitle"
import { deleteAnnouncement, editAnnouncement, getAnnouncement, newAnnouncement } from "../../Helper/Announcement"
import { useLocation, useNavigate } from "react-router-dom"

const NewAnnouncement = () => {

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const useQuery = () => {
        const { search } = useLocation()
        return React.useMemo(() => new URLSearchParams(search), [search])
    }
    const query = useQuery()
    let id = query.get('id')
    const [api, contextHolder] = notification.useNotification()

    const openNotification = ({ type, message, description }) => {
      api[type]({
        message: message,
        description: description
      })
    }

    useEffect(() => {
        document.title = "Add/Edit Announcement | SoCIS"

        if(id) {
            setLoading(true)
            getAnnouncement({ announcementId: id})
                .then((data) => {
                    setData(data)
                    setLoading(false)
                    
                })
                .catch((error) => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                })
        }
    }, [setData, id])

    const onFinish = (values) => {
        setLoading(true)
        if(id) {
            editAnnouncement(values)
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    }
                    else
                        return navigate('/management/announcement/view?success=edit')
                })
                .catch((error) => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                })
        }else {
            delete values._id
            newAnnouncement(values)
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    }else
                        return navigate('/management/announcement/view?success=new')
                })
                .catch(error => {
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                })
        }
    }       

    const deleteAnn = () => {
        setLoading(true)
        deleteAnnouncement({ announcementId: data._id })
            .then((data) => {
                if(data.error) {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                }
                else
                    return navigate('/management/announcement/view?success=delete')
            })
            .catch((error) => {
                setLoading(false)
                return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
            })
    }

    return(
        <ManagementBase>
        {contextHolder}
           <PageTitle title={id ? "Update Announcement" : "New Announcement" } />
           {loading ? <Skeleton active /> : <Form
                name="new-announcement"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Announcement ID"
                    name="_id"
                    initialValue={data ? data._id: ""}
                    rules={[{ required: false, message: 'Field is required!' }]}
                >
                    <Input 
                        type="text" 
                        disabled={true}
                    />
                </Form.Item>
                <Form.Item
                    label="Title"
                    name="title"
                    initialValue={data ? data.title : ""}
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input
                        type="text"
                        placeholder="Title"
                    />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="descriptiom"
                    initialValue={data ? data.description : ""}
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input
                        type="text"
                        placeholder="Excerpt"

                    />
                </Form.Item>
                <Form.Item
                    label="Message"
                    name="message"
                    initialValue={data ? data.message : ""}
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input.TextArea
                        type="text"
                        placeholder="Message"
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        { id ? "Update Announcement": "Add Announcement" }
                    </Button>
                </Form.Item>
                <Button onClick={deleteAnn} type="primary" style={{background: 'red', textAlign: 'center', alignSelf: 'center', visibility: (id ? "visible" : "hidden")}}>
                    Delete
                </Button>
            </Form> }
        </ManagementBase>
    )
}

export default NewAnnouncement