import React from "react"
import { Col, Card, Row, Typography, Badge } from 'antd'

const FullPost = (props) => {
    return(
       <Row>
            <Col flex={3} style={{ height: '70vh'}}>
                <Badge.Ribbon text={`By: ${props.data.author.firstName} | `+String(props.data.createdAt.split('T')[0])}>
                    <Card style={{ height: '70vh'}} hoverable>
                        <Typography.Title style={{ fontSize: '30px', textAlign: 'left'}}>
                            {props.data.title}
                        </Typography.Title>
                        <hr/>
                        <Typography.Text style={{ fontSize: '16px'}}>
                            { props.data.content }
                        </Typography.Text> 
                    </Card>
                </Badge.Ribbon>
            </Col>
            
       </Row>
    )
}

export default FullPost