import React, { useState } from "react"
import { Col, Card, Row, Typography, Badge, Button, Modal } from 'antd'

const FullMessage = (props) => {
    const [open, setOpen] = useState(false)
    return(
       <Row>
            <Col flex={3} style={{ height: '70vh'}}>
                <Badge.Ribbon text={String(props.data.createdAt.split('T')[0])}>
                    <Card style={{ height: '70vh'}} hoverable>
                        <Typography.Title style={{ fontSize: '30px', textAlign: 'center'}}>
                            {props.data.title}
                        </Typography.Title>
                        { props.data.attachmentFile != null ? <Button  onClick={() => setOpen(true)}>Open Attachment File</Button>: ""} <br/>
                        <Typography.Title style={{ fontSize: '18px', textAlign: 'center', visibility: (props.data.excerpt ? 'visible' : 'hidden')}}>
                            Subject: {props.data.excerpt}
                        </Typography.Title>
                        <Typography.Text style={{ fontSize: '16px', padding: '20px'}}>
                            { props.data.content }
                        </Typography.Text> 
                        <Typography.Title style={{ fontSize: '20px', bottom: 0, right: 0, position: 'absolute', padding: '20px'}}>
                            { props.data.author.firstName } { props.data.author.lastName} <br/> ({ props.data.author.designations })
                        </Typography.Title> 
                        <Modal width={1200} title="Attachment" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)}>
                            <iframe  width={1000} height={600} src={props.data.attachmentFile}></iframe>
                        </Modal>
                    </Card>
                </Badge.Ribbon>
            </Col>
            
       </Row>
    )
}

export default FullMessage