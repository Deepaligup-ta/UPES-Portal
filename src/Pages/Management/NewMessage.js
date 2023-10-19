import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import { Form , Button, Input, notification, Select, Skeleton } from 'antd'
import PageTitle from "../../Components/Basic/PageTitle"
import { deleteMessage, editMessage, getMessage, newMesssage } from "../../Helper/Message"
import { useLocation, useNavigate } from "react-router-dom"
import { getAllUsers, getAuthToken } from "../../Helper/Authentication"
import { getGroup, getGroups, newGroup } from "../../Helper/Group"

const NewMessage = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ to: [] })
    const [def, setDef] = useState([getAuthToken()._id])
    const [groups, setGroups] = useState([])
    const [recipent, setRecipent] = useState([])
    const [groupRec, setGroupRec] = useState([])
    const [name, setName] = useState("")
    const [groupSet, setGroupSet] = useState(false)
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
        getGroups()
            .then((data) => {
                if(data.error){
                    return openNotification({ type: 'error', message: 'Error Occured!', description: data.errorMessage })
                }
                let array = []
                data.map((item) => {
                    array.push({ value: item._id, label: `${item.groupName}` })
                })
                setGroups(array)
            })
            .catch((error) => {
                return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
            })
        getAllUsers()
            .then((data) => {
                if(data.error){
                    return openNotification({ type: 'error', message: 'Error Occured!', description: data.errorMessage })
                }
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
                    setDef(data.to)
                    setLoading(false)
                    
                })
                .catch((error) => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }
    }, [setData, id, setRecipent])

    const onFinish = (values) => {
        groupRec.map((item) => {
            setDef([...def, item])
        })
        let unique = []
        def.forEach(element => { 
            if (!unique.includes(element)) { 
                unique.push(element)
            } 
        })
        values.to = unique
        setLoading(true)
        if(id) {
            editMessage(values)
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    }
                    else
                        return navigate('/management/message/view?success=edit')
                })
                .catch((error) => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }else {
            delete values._id
            newMesssage(values)
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    }
                    else
                        return navigate('/management/message/view?success=new')
                })
                .catch(error => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured!', description: ''})
                })
        }
    }       

    const deleteAnn = () => {
        setLoading(true)
        deleteMessage({ MessageId: data._id })
            .then((data) => {
                if(data.error){
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                }else
                    return navigate('/management/message/view?success=delete')
            })
            .catch((error) => {
                setLoading(false)
                return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
            })
    }

    const createGroup = () => {
        let unique = []
        def.forEach(element => { 
            if (!unique.includes(element)) { 
                unique.push(element)
            } 
        })
        newGroup({ groupName: name, users: unique })
            .then((data) => {
                openNotification({ type: 'success', message: 'Group Created!', description: `Group is created with the name : ${data.groupName}` })
            })
            .catch((error) => {
                return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
            })
    }
    
    const populateGroupData = (value) => {
        let unique = []
        getGroup({ groupId: value })
            .then((group) => {
                let arr = [...def]
                group.users.map((item) => {
                    arr.push(item)
                })
                arr.forEach(element => { 
                    if (!unique.includes(element)) { 
                        unique.push(element)
                    } 
                })
                setGroupSet(true)
                setGroupRec(unique)
            })
    }

    const handleChange = (value) => {
               
        setDef(value)
        
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
                { !def ? "Not Available":
                    <Select
                        mode="multiple"
                        style={{
                        width: '100%',
                        }}
                        defaultValue={(def ? def : [''])}
                        placeholder="Select recipents"
                        onChange={handleChange}
                        optionLabelProp="label"
                        options={recipent}
                    />
                }
                    <br/>
                </Form.Item>
                <Form.Item
                    label="Group Recipents"
                >
                    <Select
                        style={{
                        width: '100%',
                        }}
                        placeholder="Select Group"
                        onChange={populateGroupData}
                        optionLabelProp="label"
                        options={groups}
                    />
                    
                </Form.Item>
                <Form.Item
                    label="Create Group"
                    style={{ margin: 10 }}
                >
                    <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <Button
                         onClick={createGroup}
                    >
                        Create Group
                    </Button>
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