import { Card, Layout, QRCode, Col, Row, Button, Form, Input, Modal } from "antd"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { changePasswordFlag, getAuthToken, getPicture, uploadPicture } from "../../Helper/Authentication"

const ProfileCard = (props) => {
    const [pic, setPic] = useState(null)
    const [newPic, setNewPic] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getPicture({ userId: props.data._id })
            .then((data) => {
                if(data.error)
                    return setPic(false)
                setPic(data.profilePic)
            })
    }, [setPic])
    let reader = new FileReader()
    const fileChange = (e) => {
        const file = e.target.files[0]
        reader.onloadend = () => {
            setNewPic(reader.result)
        }
        reader.readAsDataURL(file)
    }
    const onFinish = () => {
        setLoading(true)
        uploadPicture({ profilePic: newPic })
            .then((data) => {
                if(data.error)
                    alert("Error Uploading")
                setLoading(false)
                setPic(newPic)
            })
            .catch((error) => {
                setLoading(false)
                setPic(false)
            })
    }

    const changePassword = () => {
        changePasswordFlag()
            .then(data => {
                if(data.error)
                    return alert("Can't Change The Flag!")
                console.log(data)
                if(data.success){
                    localStorage.setItem('user', JSON.stringify({ changePassword: true }))
                    return window.location.href = ('/new-password')
                }else {
                    alert("Encountered An Error")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <Layout.Content>
            <Row>
                <Col flex={0.2}>
                    <Card 
                        style={{ width: '240px', border: 'none' }}  
                        hoverable 
                        cover={<img  src={`${(pic ? pic : '/profile.png')}`} />}
                    >
                    </Card>
                </Col>
                <Col flex={3}>
                    <Card hoverable>
                        <b>Name:</b> {props.data.firstName} {props.data.lastName}<br/>
                        <b>SAPID:</b> {props.data.sapId}<br/>
                        <b>Email:</b> <a href={`mailto:${props.data.email}`}>{props.data.email}</a><br/>
                        <b>Designations:</b> {props.data.designations} <br/>
                        {!props.data.reportingManager ? '' :
                            <div>
                                <b>Reporting Manager:</b> <br/>
                                <b>Name:</b> {props.data.reportingManager.firstName} {props.data.reportingManager.lastName} <br/>
                                <b>Email:</b> <Link to={`mailto:${props.data.reportingManager.email}`}> {props.data.reportingManager.email}</Link><br/>
                            </div>
                        }
                        { props.data.sapId === getAuthToken().user.sapId ? 
                            <Form
                                name="picture"
                                onFinish={onFinish}
                                autoComplete="off"
                                style={{ width: '240px'}}
                            >
                                <Form.Item
                                    style={{ padding: 0, margin: 0}}
                                    label="Profile Picture"
                                    name="profilePic"
                                    rules={[{ required: true, message: 'Field is required!' }]}
                                >
                                    <Input onChange={fileChange} type="file" />
                                </Form.Item>
                                { loading ? "Uploading..." : ''}
                                <Button  type="primary" htmlType="submit">
                                    {loading ? 'Uploading' : 'Upload'}
                                </Button><br/>
                            </Form>
                            : "" }
                        <br/>
                        <Button style={{ visibility: (props.data.sapId !== getAuthToken().user.sapId ? 'hidden' : 'visible')}} type="primary" onClick={() => changePassword()}>
                                Change Password
                        </Button>
                        <QRCode 
                            value={JSON.stringify(props.data)}
                            style={{ float: 'right'}}
                        />
                    </Card>
                </Col>
            </Row>

        </Layout.Content>
    )
}

export default ProfileCard