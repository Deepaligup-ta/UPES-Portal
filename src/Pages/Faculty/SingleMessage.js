import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import { Skeleton } from "antd"
import { getMessage } from "../../Helper/Message"
import { useParams } from "react-router-dom"
import FullMessage from "../../Components/Basic/FullMessage"
import FacultyBase from "../../Components/Faculty/Base"


const SingleMessageFaculty = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        document.title = "View Message | SoCIS"
        getMessage({ messageId: id })
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData ])
   
    
    return(
        <FacultyBase>
            <PageTitle title="Message" />
            { loading ? <Skeleton active /> : <FullMessage data={data} /> }
           
        </FacultyBase>
    )
}

export default SingleMessageFaculty