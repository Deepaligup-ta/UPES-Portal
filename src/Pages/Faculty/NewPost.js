import React, { useEffect, useState } from "react"
import FacultyBase from '../../Components/Faculty/Base'
import { Form , Button, Input, notification, Select, Skeleton, Modal } from 'antd'
import PageTitle from "../../Components/Basic/PageTitle"
import { useLocation, useNavigate } from "react-router-dom"
import { getAllUsers, getAuthToken } from "../../Helper/Authentication"
import { getGroup, getGroups, newGroup } from "../../Helper/Group"
import { deletePost, editPost, newPost, getPost } from "../../Helper/Post"

const NewPostFaculty = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ to: [] })
    const [def, setDef] = useState([getAuthToken()._id])
    const [groups, setGroups] = useState([])
    const [recipent, setRecipent] = useState([])
    const [groupRec, setGroupRec] = useState([])
    const [name, setName] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [groupSet, setGroupSet] = useState(false)
    const [type, setType] = useState('Message')
    const [file, setFile] = useState(null)
    const [newGn, setNewGn] = useState(null)
    const [newGr, setNewGr] = useState(null)


    const navigate = useNavigate()
   
    const useQuery = () => {
        const { search } = useLocation()
        return React.useMemo(() => new URLSearchParams(search), [search])
    }
    const query = useQuery()
    let id = query.get('id')
    let success = query.get('success')
    const [api, contextHolder] = notification.useNotification()

    const openNotification = ({ type, message, description }) => {
        
      api[type]({
        message: message,
        description: description
      })
    }

    useEffect(() => {
        document.title = "Add/Edit Message | SoCIS"
        if(success === 'new')
            openNotification({ type: 'success', message: 'Successfully Added!', description: ''})
        else if(success === 'edit')
            openNotification({ type: 'success', message: 'Successfully Updated!', description: ''})
        else if(success === 'delete')
            openNotification({ type: 'success', message: 'Successfully Deleted!', description: ''})
        else if(success === 'error') 
            openNotification({ type: 'error', message: 'An Unexpected Error Occured!', description: ''})


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
            getPost({ postId: id})
                .then((data) => {
                    setType(data.type)
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
        values.type = type
        if(file) {
            values.attachmentFile = file
        }else {
            values.attachmentFile = ''
        }
        if(values.type === "Announcement") {
            values.to = groupRec
        }
        if(values.type === "Message") {
            groupRec.forEach(element => { 
                if (!def.includes(element)) {
                    console.log(element)
                    def.push(element)
                } 
            })
            values.to = def
        }
        setLoading(true)
        if(id) {
            editPost(values)
                .then((data) => {
                    console.log(data)
                    if(data.error){
                        setLoading(false)
                        return window.location.href = `?id=${values._id}&success=error`
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    }
                    else{
                        setLoading(false)
                        setData({ to: []})
                        setRecipent([])
                        setGroupRec([])
                        return window.location.href = (`?id=${values._id}&success=edit`)
                    }
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
                    else{
                        setLoading(false)
                        setData({ to: []})
                        setRecipent([])
                        setGroupRec([])
                        return window.location.href = ('/faculty/post/new?success=new')
                    }
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
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                }else
                    return window.location.href = ('/faculty/post/new?success=delete')
            })
            .catch((error) => {
                setLoading(false)
                return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
            })
    }

    const createGroup = () => {
      
        newGroup({ groupName: newGn, users: newGr })
            .then((data) => {
                window.location.href = '/faculty/post/new?success=group'
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
    const openModal = () => {
        setIsModalOpen(true)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const fileChange = (e) => {
        const f = e.target.files[0]
        var reader = new FileReader()
        reader.readAsDataURL(f)
        reader.onload = () => {
            setFile(reader.result)
        }
    }
    return(
        <FacultyBase>
        {contextHolder}
           <PageTitle title={id ? "Update Post" : "New Post" } />
           {loading ? <Skeleton active /> : <Form
                name="new-Message"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
             <Form.Item
                    label="Type"
                    name="type"
                    rules={[{ required: false, message: 'Field is required!' }]}

                >
                    <Select
                        mode="single"
                        style={{
                            width: '100%',
                        }}
                        placeholder="Select Type "
                        defaultValue={[type]}
                        onChange={(value) => setType(value)}
                        optionLabelProp="label"
                        options={[{value:'Announcement'}, { value:'Message' }, { value: (getAuthToken().user.role === "management" ? 'Policy' : '')}]}
                    />
                    <br/>
                </Form.Item>
                <Form.Item
                    label="ID"
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
                        disabled={(type === "Announcement" || type === "Policy" ? true : false)}
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
                <p style={{ color: 'red', visibility: (type === "Announcement" ? 'visible': 'hidden')}}>Note: To Send To All, Do Not Select Any Group</p>
                <Form.Item
                    label="Group Recipents"
                >
                    <Select
                        disabled={(type === "Policy" ? true : false)}
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
                >
                      <Button
                        onClick={openModal}
                        disabled={(type === "Policy" ? true : false)}
                    >
                        Create Group
                    </Button>
                 
                </Form.Item>
                <Form.Item
                    label={(type === "Policy" ? "Policy File" : "Attach A File")}
                    name="attachmentFile"
                    rules={[{ required: false, message: 'Field is required!' }]}
                >
                    <Input onChange={fileChange} type="file" />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="excerpt"
                    initialValue={data.excerpt ? data.excerpt : ""}
                    rules={[{ required: (type === "Message" ? false : true ), message: 'Field is required!' }]}
                >
                    <Input.TextArea
                        type="text"
                        placeholder="Description"
                    />
                </Form.Item>
                <Form.Item
                    label="Add Text"
                    name="text"
                    initialValue={data.content ? data.content : ""}
                    rules={[{ required: (type === "Policy" ? false : true ), message: 'Field is required!' }]}
                >
                    <Input.TextArea
                        disabled={(type === "Policy" ? true : false)}
                        type="text"
                        placeholder="Message"
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        { id ? "Update": "Add" }
                    </Button>
                </Form.Item>
                <Button onClick={deleteAnn} type="primary" style={{background: 'red', textAlign: 'center', alignSelf: 'center', visibility: (id ? "visible" : "hidden")}}>
                    Delete
                </Button>
            </Form> }
            <Modal title="Create Group" onOk={createGroup} okText="Create"  open={isModalOpen} onCancel={handleCancel}>
               <Form>
                    <Form.Item
                        label="Recipents"
                        rules={[{ required: true, message: 'Field is required!'}]}
                    >
                        <Select
                            disabled={(type === "Announcement" || type === "Policy" ? true : false)}
                            mode="multiple"
                            style={{
                                width: '100%',
                            }}
                            placeholder="Select Recipents"
                            onChange={(value) => setNewGr(value)}
                            optionLabelProp="label"
                            options={recipent}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Group Name"
                        rules={[{ required: true, message: 'Field is required!'}]}
                    >
                        <Input type="text" placeholder="Group Name" onChange={(e) => setNewGn(e.target.value)} />
                    </Form.Item>
               </Form>
            </Modal>
        </FacultyBase>
    )
}

export default NewPostFaculty