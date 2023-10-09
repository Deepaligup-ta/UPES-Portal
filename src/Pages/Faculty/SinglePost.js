import React, { useEffect, useState } from "react"
import { Skeleton } from "antd"
import { useParams } from "react-router-dom"
import FacultyBase from "../../Components/Faculty/Base"
import { getPost } from "../../Helper/Post"
import FullPost from "../../Components/Basic/FullPost"


const SinglePostFaculty = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        document.title = "View Message | SoCIS"
        getPost({ postId: id })
            .then((res) => {
                if(res.error) 
                    return window.location.href = '/faculty/post/view?error=true'
                setData(res)
                setLoading(false)
            })
            .catch((error) => {
                return window.location.href = '/faculty/post/view?error=true'
            })
    }, [setData ])
   
    
    return(
        <FacultyBase>
            { loading ? <Skeleton active /> : <FullPost data={data} /> }
           
        </FacultyBase>
    )
}

export default SinglePostFaculty