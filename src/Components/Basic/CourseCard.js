import React from "react"
import { Row, Col, Card, Button, Typography, Badge } from 'antd'
import { Link } from "react-router-dom"
const CourseCard = (props) => {
    return(
        <Row>
            {props.data.map((item) => {
                return(
                    <Col
                        key={item._id}
                        xs={{
                            span: 5,
                            offset: 1,
                            }}
                        lg={{
                            span: 5,
                            offset: 1,
                        }}
                        style={{ margin: '20px'}}

                    >
                        {/* <Link to={`${item._id}`}> */}
                            <Badge.Ribbon 
                            >
                                <Card 
                                    bordered={true}
                                >
                                    <Typography.Title style={{ fontSize: '24px'}}>
                                        {item.courseName}
                                    </Typography.Title>
                                    <Typography.Title style={{ fontSize: '14px', textAlign: 'right'}}>
                                        Type: {item.type} <br />
                                        Total Semesters: {item.duration * 2} <br/>
                                        School: {item.school.schoolName}
                                    </Typography.Title>
                                </Card>
                            </Badge.Ribbon>
                        {/* </Link> */}
                    </Col>
                )

            })}
        </Row>
    )
}

export default CourseCard