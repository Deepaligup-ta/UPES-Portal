import React, { useEffect, useState } from "react"
import ManagementBase from "../../Components/Management/Base"
import PageTitle from "../../Components/Basic/PageTitle"
import { Skeleton } from "antd"
import { useParams } from "react-router-dom"
import FullMessage from "../../Components/Basic/FullMessage"
import { getPost } from "../../Helper/Post"


const SingleMessage = (props) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        document.title = "View Message | SoCIS"
        getPost({ postId: id })
            .then((res) => {
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [setData ])
   
    
    return(
        <ManagementBase>
            <PageTitle title="Message" />
            { loading ? <Skeleton active /> : <FullMessage data={data} /> }
           
        </ManagementBase>
    )
}

export default SingleMessage