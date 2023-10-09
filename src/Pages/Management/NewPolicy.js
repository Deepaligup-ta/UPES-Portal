import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import { Form , Button, Input, Spin, notification, Upload, } from 'antd'
import PageTitle from "../../Components/Basic/PageTitle"
import { getPolicy, deletePolicy, editPolicy, newPolicy } from "../../Helper/Policy"
import { useLocation, useNavigate } from "react-router-dom"

const NewPolicy = () => {

    const [error, setError] = useState(false)
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
                    console.log(data)
                    if(data.error)
                        return openNotification({ type: 'error', message: 'Cannot Find The Policy', description: `We can't find the policy with id: ${id}`})
                    setData(data)
                    setLoading(false)
                    
                })
                .catch((error) => {
                    return openNotification({ type: 'error', message: 'Cannot Find The Policy', description: `We can't find the policy with id: ${id}`})
                    console.log(error)
                })
        }
    }, [setData, id])

    const onFinish = (values) => {
        if(!file)
            return openNotification({ type: 'error', message: 'Error Occured', description: "Cannot Upload The File!"})
        values.policyFile = file
        if(id) {
            values.policyFile = file
            editPolicy(values)
                .then((data) => {
                    console.log(data)
                    if(data.error)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    else
                        return navigate('/management/policy/view?success=edit')
                })
                .catch((error) => {
                    console.log(error)
                })
        }else {
            delete values._id
            values.policyFile = file
            newPolicy(values)
                .then((data) => {
                    if(data.error)
                        return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                    else
                        return navigate('/management/policy/view?success=new')
                })
                .catch(error => {
                    console.log(error)
                })
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
        deletePolicy({ policyId: data._id })
            .then((data) => {
                if(data.error) 
                    return openNotification({ type: 'error', message: 'Error Occured', description: (data.errorMessage ? data.errorMessage : "")})
                else
                    return navigate('/management/policy/view?success=delete')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <ManagementBase>
        {contextHolder}
           <PageTitle title={id ? "Update Policy" : "New Policy" } />
           {loading ? <Spin /> : <Form
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