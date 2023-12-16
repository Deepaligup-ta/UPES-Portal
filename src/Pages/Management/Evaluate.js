import React, { useEffect, useState } from "react"
import PageTitle from "../../Components/Basic/PageTitle"
import { Form, Select, Space, Spin, Input, notification, Button, Table } from "antd"
import { getAll, getResult, newResult } from "../../Helper/Evaluate/index.js"
import ManagementBase from "../../Components/Management/Base.js"


const ManagementEvaluate = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [select, setSelect] = useState("Select")
    const [file, setFile] = useState(null)
    const [resultSelect, setResultSelect] = useState(null)
    const [options, setOptions] = useState([])
    const [result, setResult] = useState(null)
    const [api, contextHolder] = notification.useNotification()
    
    const openNotification = ({ type, message }) => {
      api[type]({
        message: message,
      })
    }

    useEffect(() => {
        document.title = "Evaluate | SoCIS"
        getAll('management')
            .then((res) => {
                if(res.error)
                    return openNotification({ type: 'error', message: 'Error Occurred!'})

                if(res.length === 0)
                    return openNotification({ type: 'info', message: 'No Evaluations Found!'})
                setData(res)
                let array = []
                res.map((item) => {
                    array.push({ value: `${item._id}`, label: `${item.programName}-${item.semester}-${item.batchName} Subject:${item.subjectName} (${item.subjectCode}) Result Status: ${(item.uploaded) ? 'OK' : 'Not OK'}`})
                })
                setOptions(array)
                setLoading(false)
            })
            .catch((error) => {
                return openNotification({ type: 'error', message: 'Error Occurred!'})
            })
    }, [setData, setOptions, setResultSelect, setFile, setResult])

    const dataSource = [
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "2",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
      {
        key: "1",
        name: "John Brown",
        rollnumber: "2018BTECS00001",
        sapId: "500060720",
        internal: 10,
        midsem: 20,
        endsem: 30,
      },
    ];
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Roll Number',
          dataIndex: 'rollnumber',
          key: 'rollnumber',
        },
        {
          title: 'SAPID',
          dataIndex: 'sapId',
          key: 'sapId',
        },
        {
            title: 'Internal Marks',
            dataIndex: 'internal',
            key: 'intermal',
        },
        {
            title: 'Mid Sem Marks',
            dataIndex: 'midsem',
            key: 'midsem',
        },
        {
            title: 'End Sem Marks',
            dataIndex: 'endsem',
            key: 'endsem',
        },
    ]

    const columns2 = [
        {
          title: 'Faculty Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Batch Name',
          dataIndex: 'rollnumber',
          key: 'rollnumber',
        },
        {
          title: 'Course Name',
          dataIndex: 'sapId',
          key: 'sapId',
        },
        {
            title: 'Faculty Email',
            dataIndex: 'facultyEmail',
            key: 'facultyEmail',
        },
        {
            title: 'Cluster Head Email',
            dataIndex: 'clusterHeadEmail',
            key: 'clusterHeadEmail',
        },
        {
            title: 'Send Email',
            dataIndex: 'send',
            key: 'send',
            render: (text, record) => (
                <Button type="primary" onClick={() => handleSend(record)}>Send</Button>
            ),
        },
    ]

    const handleSend = (record) => {
        // Handle send button click event
        console.log("Send button clicked for record:", record);
    }

    const onSelectChange = (e) => {
        setResult(null)
        setResultSelect(null)
        let obj = data.find(o => o._id === e)
        if(obj.uploaded) {
            getResult({ evaluationId: e })
                .then((data) => {
                    data.map((item) => {
                        dataSource.push({
                            key: item._id,
                            name: item.name,
                            rollnumber: item.rollNumber,
                            sapId: item.sapId,
                            internal: item.grades[0].internalMarks,
                            midsem: item.grades[0].midSemMarks,
                            endsem: item.grades[0].endSemMarks
                          })
                    })
                    setResult(dataSource)
                })
                .catch((err) => {
                    return openNotification({ type: 'error', message: "An Error Occurred!"})
                })
        }else {
            setResultSelect(e)
        }
    }

    const submitResult = (e) => {
        e.preventDefault()
        if(file === null) {
            return openNotification({ type: 'warning', message: 'Please Select A File First'})
        }

        let obj = data.find(o => o._id === resultSelect)
        newResult({ file: file, value: resultSelect, subjectName: obj.subjectName, subjectCode: obj.subjectCode, semester: obj.semester })
            .then((res) => {
                openNotification({ type: 'success', message: 'Result Uploaded! You Would Be Refreshed!'})
                setTimeout(() => {
                    window.location.reload()
                }, 3000)
            })
            .catch((err) => {
                return openNotification({ type: 'error', message: 'Error Occurred!'})
            })

    }

    const fileChange = (e) => {
        const f = e.target.files[0]
        let name = f.name.split('.')
        if(name[1] !== 'xlsx') {
            setTimeout(() => {
                window.location.reload()
            }, 2000)
            return openNotification({ type: 'warning', message: 'Only .XLSX File Are Allowed'})
        }
        var reader = new FileReader()
        reader.readAsDataURL(f)
        reader.onload = () => {
            setFile(reader.result)
        }
    }   

    return (
      <ManagementBase>
        {contextHolder}
        <PageTitle title="Evaluation" />
        <Space />
        {/* {loading ? (
          <Spin />
        ) : (
          <Form onSubmitCapture={() => null}>
            <Form.Item
              style={{
                width: "100%",
              }}
              required={true}
              label="Select The Batch And Course:"
            >
              <Select
                defaultValue={select}
                options={options}
                onChange={onSelectChange}
                showSearch
              ></Select>
            </Form.Item>
          </Form>
        )}
        {!result ? (
          ""
        ) : (
          <div>
            <Table
              loading={!result ? true : false}
              dataSource={result}
              columns={columns}
            />
          </div>
        )}
        {!resultSelect ? (
          ""
        ) : (
          <Form onSubmitCapture={submitResult}>
            <Form.Item label="Drag and Drop .XLSX File">
              <Input
                style={{ height: "200px" }}
                type="file"
                onChangeCapture={fileChange}
                onChange={fileChange}
                placeholder="Drag and drop files or click"
              />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )} */}
        <div style={{ maxHeight: "400px" }}>
          <h4>Faculty who have not generated award sheet</h4>{" "}
          <Table
            dataSource={dataSource}
            columns={columns2}
            pagination={false}
            scroll={{ y: 300 }}
          />
          {/* add button for send all */}
        <div style={{padding:"10px", textAlign: "right"}}>
            <Button type="primary" style={{}}>
                Send All
            </Button>
        </div>
        </div>
      </ManagementBase>
    );
}

export default ManagementEvaluate