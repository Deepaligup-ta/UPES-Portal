import React, { useEffect, useState } from "react"
import {Row, Col, Typography } from 'antd'
import ManagementBase from "../../Components/Management/Base"
import { getAuthToken } from "../../Helper/Authentication"


const ManagementDashboard = () => {
    const [user] = useState(getAuthToken())

    useEffect(() => {
        document.title = "Dashboard | SoCIS"
    })
    return(
       <ManagementBase>
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
       </ManagementBase>
    )
}

export default ManagementDashboard