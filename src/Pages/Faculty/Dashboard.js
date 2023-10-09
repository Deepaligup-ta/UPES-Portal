import React, { useEffect, useState } from "react"
import {Statistic, Row, Col, Card, Typography } from 'antd'
import { getAuthToken } from "../../Helper/Authentication"
import FacultyBase from "../../Components/Faculty/Base"



const FacultyDashboard = () => {
    const [user, setUser] = useState(getAuthToken())
    useEffect(() => {
        document.title = "Dashboard | SoCIS"

    })
    return(
       <FacultyBase>
        <Typography.Title>
            Greetings, <br/>{user.user.firstName}
        </Typography.Title>
        <Row>
                <Col
                    xs={{
                        span: 5,
                        offset: 1,
                    }}
                    lg={{
                        span: 6,
                        offset: 2,
                    }}
                >
                    
                </Col>
        </Row>
       </FacultyBase>
    )
}

export default FacultyDashboard