import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import {  Col, Row, Space, Spin, Card, Typography } from "antd"
import { useParams } from "react-router-dom"
import { getPolicy } from "../../Helper/Policy"


const FullPolicy = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        document.title = "Policy | SoCIS"
        getPolicy({ policyId: id })
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData, id])
   
    
    return(
        <ManagementBase>
            <PageTitle title="Policy View" />
            <Space />
            { loading ? <Spin style={{ textAlign: 'center', justifyContent: 'center'}} /> :
                <Row>
                    <Col flex={0.2}>
                        <Card 
                            style={{ width: '240px', height: '70vh' }}  
                        >
                            <Typography.Title style={{ fontSize: '20px'}}>
                                Name: {data.policyName}
                            </Typography.Title>
                            <Typography>
                                Description: {data.policyDescription}
                            </Typography>
                        </Card>
                    </Col>
                    <Col flex={3} style={{height: '70vh'}}>
                        <iframe width="100%" height="100%" src={data.policyFile}></iframe>
                    </Col>
                </Row> 
            }
           
        </ManagementBase>
    )
}

export default FullPolicy