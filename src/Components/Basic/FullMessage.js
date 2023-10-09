import React from "react"
import { Col, Card, Row, Typography, Badge } from 'antd'

const FullMessage = (props) => {
    return(
       <Row>
            <Col flex={3} style={{ height: '70vh'}}>
                <Badge.Ribbon text={String(props.data.createdAt.split('T')[0])}>
                    <Card style={{ height: '70vh'}} hoverable>
                        <Typography.Title style={{ fontSize: '30px', textAlign: 'center'}}>
                            {props.data.title}
                        </Typography.Title>
                        {/* <Typography.Title style={{ fontSize: '18px'}}>
                            Description: {props.data.description}
                        </Typography.Title> */}
                        <Typography.Text style={{ fontSize: '16px'}}>
                            { props.data.message }
                        </Typography.Text> 
                        <Typography.Title style={{ fontSize: '20px', bottom: 0, right: 0, position: 'absolute', padding: '20px'}}>
                            { props.data.from.firstName } { props.data.from.lastName} <br/> ({ props.data.from.designations })
                        </Typography.Title> 
                    </Card>
                </Badge.Ribbon>
            </Col>
            
       </Row>
    )
}

export default FullMessage