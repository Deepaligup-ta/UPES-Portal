import React, { useEffect, useState } from "react"
import { Form , Button, Input, notification, Skeleton } from 'antd'
import PageTitle from "../../Components/Basic/PageTitle"
import { useLocation, useNavigate } from "react-router-dom"
import { deletePost, editPost, newPost, getPost } from "../../Helper/Post"
import ManagementBase from "../../Components/Management/Base"

const NewPostManagement = () => {

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
        document.title = "Add/Edit Post | SoCIS"
       
        if(id) {
            setLoading(true)
            getPost({ postId: id})
                .then((data) => {
                    setData(data)
                    setLoading(false)
                })
                .catch((error) => {
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }
    }, [setData, id])

    const onFinish = (values) => {
        setLoading(true)
        if(id) {
            editPost(values)
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    }
                    else
                        return navigate('/management/post/view?success=edit')
                })
                .catch((error) => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }else {
            delete values._id
            newPost(values)
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    }
                    else
                        return navigate('/management/post/view?success=new')
                })
                .catch(error => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }
    }       

    const deleteAnn = () => {
        setLoading(true)
        deletePost({ postId: data._id })
            .then((data) => {
                if(data.error){
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})                }
                else
                    return navigate('/management/message/view?success=delete')
            })
            .catch((error) => {
                setLoading(false)
                return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
            })
    }

    return(
        <ManagementBase>
        {contextHolder}
           <PageTitle title={id ? "Update Post" : "New Post" } />
           {loading ? <Skeleton active /> : <Form
                name="new-post"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Post ID"
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
                    name="excerpt"
                    initialValue={data ? data.excerpt : ""}
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input
                        type="text"
                        placeholder="Excerpt"

                    />
                </Form.Item>
                <Form.Item
                    label="Content"
                    name="content"
                    initialValue={data ? data.content : ""}
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input.TextArea
                        type="text"
                        placeholder="Content"
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        { id ? "Update Message": "Add Message" }
                    </Button>
                </Form.Item>
                <Button onClick={deleteAnn} type="primary" style={{background: 'red', textAlign: 'center', alignSelf: 'center', visibility: (id ? "visible" : "hidden")}}>
                    Delete
                </Button>
            </Form> }
        </ManagementBase>
    )
}

export default NewPostManagement