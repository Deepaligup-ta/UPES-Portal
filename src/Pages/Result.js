import React, { useEffect, useState } from "react"
import { Button, Form, Input, Layout, Spin, Image } from 'antd'
import { getResults } from "../Helper/Evaluate"

const Result = () => {
    const { Header, Content, Footer } = Layout
    const [sapId, setSapId] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        document.title = "Download Result"
    }, [setSapId])
    const getResult = () => {
        setLoading(true)
        getResults({ sapId: sapId })
            .then((data) => {
                const url = window.URL.createObjectURL(data)
                const a = document.createElement("a")
                a.style.display = "none"
                a.href = url
                a.download = `${sapId}.pdf`
                document.body.appendChild(a)
                a.click()
                window.URL.revokeObjectURL(url)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                alert("Error")
            })
    }
    return(
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <div style={{ width: '400px', padding: '50px'}}>
                    <Form
                        name="basic"
                            labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                    >
                        <Form.Item
                            label="SAPID"
                            name="sapId"
                            rules={[
                                {
                                required: true,
                                message: 'Please input your sapid!',
                                },
                            ]}
                        >
                            <Input onChange={(e) => setSapId(e.target.value)} type="number" placeholder="SAPID" />
                        </Form.Item>

                        <Button type="primary" onClick={getResult}>
                            Get Result
                        </Button>
                        { loading ? <Spin /> : ""}
                    </Form>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Debugged By Students
            </Footer>
      </Layout>
    )
}

export default Result