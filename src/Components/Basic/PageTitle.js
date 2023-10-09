import { Typography } from "antd"
import React from "react"


const PageTitle = (props) => {
    return(
        <Typography.Title style={{ fontSize: '24px'}}>
            {props.title}
        </Typography.Title>
    )
}

export default PageTitle