import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import { Form , Button, Input, notification, Skeleton, } from 'antd'
import PageTitle from "../../Components/Basic/PageTitle"
import { getPolicy, deletePolicy, editPolicy, newPolicy } from "../../Helper/Policy"
import { useLocation, useNavigate } from "react-router-dom"

const NewPolicy = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [file, setFile] = useState(null)
    const navigate = useNavigate()
    const useQuery = () => {
        const { search } = useLocation()
        return React.useMemo(() => new URLSearchParams(search), [search])
    }
    let reader = new FileReader()
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
        document.title = "Add/Edit Policy | SoCIS"
        if(id) {
            setLoading(true)
            getPolicy({ policyId: id})
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})                    }
                    setData(data)
                    setLoading(false)
                    
                })
                .catch((error) => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})                })
        }
    }, [setData, id])

    const onFinish = (values) => {
        setLoading(true)
        if(!file)
            return openNotification({ type: 'error', message: 'Error Occured', description: "Cannot Upload The File!"})
        values.policyFile = file
        if(id) {
            values.policyFile = file
            editPolicy(values)
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    }
                    else
                        return navigate('/management/policy/view?success=edit')
                })
                .catch((error) => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})                })
        }else {
            delete values._id
            values.policyFile = file
            newPolicy(values)
                .then((data) => {
                    if(data.error){
                        setLoading(false)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})                    
                    }
                    else
                        return navigate('/management/policy/view?success=new')
                })
                .catch(error => {
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})                })
        }
    }       
    const fileChange = (e) => {
        const file = e.target.files[0]
        reader.onloadend = () => {
            setFile(reader.result)
        }
        reader.readAsDataURL(file)
    }
    const deleteAnn = () => {
        setLoading(true)
        deletePolicy({ policyId: data._id })
            .then((data) => {
                if(data.error){
                    setLoading(false)
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                }
                else
                    return navigate('/management/policy/view?success=delete')
            })
            .catch((error) => {
                setLoading(false)
                return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
            })
    }

    return(
        <ManagementBase>
        {contextHolder}
           <PageTitle title={id ? "Update Policy" : "New Policy" } />
           {loading ? <Skeleton active /> : <Form
                name="new-policy"
                labelCol={{ span: 2 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Policy ID"
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
                    label="Policy Name"
                    name="policyName"
                    initialValue={data ? data.policyName : ""}
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input
                        type="text"
                        placeholder="Policy Name"
                    />
                </Form.Item>
                <Form.Item
                    label="Policy Description"
                    name="policyDescription"
                    initialValue={data ? data.policyDescription : ""}
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input
                        type="text"
                        placeholder="Excerpt"

                    />
                </Form.Item>
                <Form.Item
                    label="Policy File"
                    name="policyFile"
                    rules={[{ required: true, message: 'Field is required!' }]}
                >
                    <Input onChange={fileChange} type="file" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        { id ? "Update Policy": "Add Policy" }
                    </Button>
                </Form.Item>
                <Button onClick={deleteAnn} type="primary" style={{background: 'red', textAlign: 'center', alignSelf: 'center', visibility: (id ? "visible" : "hidden")}}>
                    Delete
                </Button>
            </Form> }
        </ManagementBase>
    )
}

export default NewPolicy