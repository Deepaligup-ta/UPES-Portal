import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import { Form , Button, Input, notification, Select, Skeleton } from 'antd'
import PageTitle from "../../Components/Basic/PageTitle"
import { deleteMessage, editMessage, getMessage, newMesssage } from "../../Helper/Message"
import { useLocation, useNavigate } from "react-router-dom"
import { getAllUsers } from "../../Helper/Authentication"

const NewMessage = () => {

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [recipent, setRecipent] = useState([])
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
        document.title = "Add/Edit Message | SoCIS"
        getAllUsers()
            .then((data) => {
                if(data.error)
                    return openNotification({ type: 'error', message: 'Error Occured!', description: data.errorMessage })
                let array = []
                data.map((item) => {
                    array.push({ value: item._id, label: `${item.firstName} ${item.lastName} | SAP: ${item.sapId} | ${item.designations}` })
                })
                setRecipent(array)
            })
            .catch((error) => {
                return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
            })
        if(id) {
            setLoading(true)
            getMessage({ messageId: id})
                .then((data) => {
                    setData(data)
                    setLoading(false)
                    
                })
                .catch((error) => {
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }
    }, [setData, id, setRecipent])

    const onFinish = (values) => {
        if(id) {
            editMessage(values)
                .then((data) => {
                    if(data.error)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    else
                        return navigate('/management/message/view?success=edit')
                })
                .catch((error) => {
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }else {
            delete values._id
            newMesssage(values)
                .then((data) => {
                    if(data.error)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    else
                        return navigate('/management/message/view?success=new')
                })
                .catch(error => {
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }
    }       

    const deleteAnn = () => {
        deleteMessage({ MessageId: data._id })
            .then((data) => {
                if(data.error) 
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                else
                    return navigate('/management/message/view?success=delete')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleChange = (value) => {
        data.to.push(value)
    }

    return(
        <ManagementBase>
        {contextHolder}
           <PageTitle title={id ? "Update Message" : "New Message" } />
           {loading ? <Skeleton active /> : <Form
                name="new-Message"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Message ID"
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
                    label="Recipents"
                    name="to"
                >
                {console.log()}
                    <Select
                        mode="multiple"
                        style={{
                        width: '100%',
                        }}
                        defaultValue={(data ? data.to : [''])}
                        placeholder="select recipents"
                        onChange={handleChange}
                        optionLabelProp="label"
                        options={recipent}
                    />
                    {  }
                    
                </Form.Item>
                {/* <Form.Item
                    label="Description"
                    name="descriptiom"
                    initialValue={data ? data.description : ""}
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input
                        type="text"
                        placeholder="Excerpt"

                    />
                </Form.Item> */}
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

export default NewMessage