import React from "react"
import { Row, Col, Skeleton } from 'antd'

const CardLoader = (props) => {
    return(
        <Row>
           
            <Col
                key={1}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
            <Col
                key={2}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
            <Col
                key={3}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
            <Col
                key={4}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
            <Col
                key={4}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
            <Col
                key={4}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
            <Col
                key={4}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
            <Col
                key={4}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
            <Col
                key={5}
                xs={{
                    span: 5,
                    offset: 2,
                }}
                lg={{
                    span: 5,
                    offset: 2,
                }}
            >
                    <Skeleton active />    
            </Col>
        </Row>
    )
}

export default CardLoader