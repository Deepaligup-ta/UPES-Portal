import React from "react"
import { Row, Col, Card, Button, Typography, Badge } from 'antd'
import { DashOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom"
import { getAuthToken } from "../../Helper/Authentication"
const AnnouncementCard = (props) => {
    return(
        <Row >
            {props.data.map((item) => {
                return(
                    <Col
                        key={item._id}
                        xs={{
                            span: 5,
                            offset: 2,
                            }}
                        lg={{
                            span: 5,
                            offset: 2,
                        }}
                        style={{ margin: '20px'}}
                    >
                        <Link to={`${item._id}`}>
                            <Badge.Ribbon 
                                text={String(item.createdAt.split('T')[0])}
                            >
                                <Card 
                                    bordered={true}
                                    actions={[
                                        // <Link to={`${item._id}`}>
                                        //     <Button >
                                        //         See
                                        //     </Button>
                                        // </Link>,
                                        <Link style={{visibility: ( getAuthToken().user.role === "management" ? "visible": "hidden")}} to={`/management/announcement/new?id=${item._id}`}>
                                            <Button >
                                                Update
                                            </Button>
                                        </Link>
                                    ]}
                                >
                                    <Typography.Title style={{ fontSize: '18px'}}>
                                        {item.title}
                                    </Typography.Title>
                                    <Typography.Text>
                                        {item.description}
                                    </Typography.Text>
                                    <Typography.Title style={{ fontSize: '12px', textAlign: 'right'}}>
                                        {item.from.firstName} <br />
                                        ({item.from.designations})
                                    </Typography.Title>
                                </Card>
                            </Badge.Ribbon>
                        </Link>
                    </Col>
                )

            })}
        </Row>
    )
}

export default AnnouncementCard