import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import {  Col, Row, Space, Spin, Typography } from "antd"
import { useParams } from "react-router-dom"
import { getPolicy } from "../../Helper/Policy"
import FacultyBase from "../../Components/Faculty/Base"


const FullFacultyPolicy = (props) => {
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
        <FacultyBase>
            <PageTitle title="Policy View" />
            <Space />
            { loading ? <Spin style={{ textAlign: 'center', justifyContent: 'center'}} /> :
                <Row style={{ height: '100vh', width: '100vw'}}>
                    <Col flex="200px">
                        <Typography.Text style={{ fontSize: '18px'}}>
                            Policy Name: {data.policyName} <br />
                            Policy Description: {data.policyDescription}
                        </Typography.Text>
                    </Col>
                    <Col flex="auto">
                        <iframe width="50%" height="50%" src={data.policyFile}></iframe>
                    </Col>
                </Row> 
            }
           
        </FacultyBase>
    )
}

export default FullFacultyPolicy