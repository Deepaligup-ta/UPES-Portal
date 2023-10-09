import { Table } from "antd"
import React from "react"

const TableCard = (props) => {
    return(
        <Table 
            loading={props.loading}
            columns={props.columns}
            dataSource={props.data}
            pagination={false}
        />
    )
}

export default TableCard