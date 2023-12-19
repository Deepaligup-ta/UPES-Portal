import React from "react";
import PageTitle from "../../Components/Basic/PageTitle";
import {
  Form,
  Select,
  Space,
  Spin,
  Input,
  notification,
  Button,
  Table,
  Tabs,
  Col,
  InputNumber,
  Row,
} from "antd";
import {
  getAll,
  getAwardSheet,
  getNotEvaluated,
  getResult,
  newResult,
} from "../../Helper/Evaluate/index.js";
import ManagementBase from "../../Components/Management/Base.js";
import { Layout } from "antd";
import { useState, useEffect } from "react";
const ManagementEvaluate = () => {
  const [internalAssessmentPercentage, setInternalAssessmentPercentage] =
    useState(30);
  const [midsemPercentage, setMidsemPercentage] = useState(20);
  const [endsemPercentage, setEndsemPercentage] = useState(50);
  const [data, setData] = useState([]);
  const [evaData, setEvaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState("Select");
  const [file, setFile] = useState(null);
  const [resultSelect, setResultSelect] = useState(null);
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState(null);
  const [api, contextHolder] = notification.useNotification();
  const [gradingPoints, setGradingPoints] = useState([
    { grade: "O", min: 85, max: 100, defaultValue: 0 },
    { grade: "A+", min: 75, max: 84, defaultValue: 1 },
    { grade: "A", min: 65, max: 74, defaultValue: 2 },
    { grade: "B+", min: 55, max: 64, defaultValue: 3 },
    { grade: "B", min: 45, max: 54, defaultValue: 4 },
    { grade: "C", min: 40, max: 44, defaultValue: 5 },
    { grade: "F", min: 0, max: 39, defaultValue: 6 },
  ]);
  const [faculty, setFaculty] = useState(null);

  const openNotification = ({ type, message }) => {
    api[type]({
      message: message,
    });
  };
  const dataSource = [];
  useEffect(() => {
    document.title = "Evaluate | SoCIS";
    getAll("management")
      .then((res) => {
        let array = [];
        res.map((item) => {
          array.push({
            name: item.evaluator.firstName + " " + item.evaluator.lastName,
            email: item.evaluator.email,
            batchName: `${item.programName} ${item.batchName} SEM: ${item.semester}`,
            subjectName: `${item.subjectName} (${item.subjectCode})`,
            reportingManager: `${
              item.evaluator.reportingManager
                ? item.evaluator.reportingManager.email
                : "No Reporting Manager"
            }`,
          });
        });
        setEvaData(array);
      })
      .catch((error) => {
        return openNotification({ type: "error", message: "Error Occurred!" });
      });


    getAll("faculty")
      .then((res) => {
        if (res.error)
          return openNotification({
            type: "error",
            message: "Error Occurred!",
          });

        if (res.length === 0)
          return openNotification({
            type: "info",
            message: "No Evaluations Found!",
          });
        setData(res);

        let array = [];
        res.map((item) => {
          array.push({
            value: `${item._id}`,
            label: `${item.programName}-${item.semester}-${
              item.batchName
            } Subject:${item.subjectName} (${
              item.subjectCode
            }) Result Status: ${item.uploaded ? "OK" : "Not OK"}`,
          });
        });
        setOptions(array);
        setLoading(false);
      })
      .catch((error) => {
        return openNotification({ type: "error", message: "Error Occurred!" });
      });
  }, [setData, setOptions, setResultSelect, setFile, setResult, setFaculty]);

  


  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Roll Number",
      dataIndex: "rollnumber",
      key: "rollnumber",
    },
    {
      title: "SAPID",
      dataIndex: "sapId",
      key: "sapId",
    },
    {
      title: "Internal Marks",
      dataIndex: "internal",
      key: "intermal",
    },
    {
      title: "Mid Sem Marks",
      dataIndex: "midsem",
      key: "midsem",
    },
    {
      title: "End Sem Marks",
      dataIndex: "endsem",
      key: "endsem",
    },
    {
      title: "Final Marks",
      dataIndex: "finalmarks",
      key: "finalmarks",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      dataIndex: "grade",
    },
  ];

  const columns2 = [
    {
      title: "Faculty Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Batch Name",
      dataIndex: "batchName",
      key: "batchName",
    },
    {
      title: "Course Name",
      dataIndex: "subjectName",
      key: "subjectName",
    },
    {
      title: "Faculty Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Cluster Head Email",
      dataIndex: "reportingManager",
      key: "reportingManager",
    },
    {
      title: "Send Email",
      dataIndex: "send",
      key: "send",
      render: (text, record) => (
        <Button type="primary" onClick={() => handleSend(record)}>
          Send
        </Button>
      ),
    },
  ];

  const handleSend = (record) => {
    // Handle send button click event
    console.log("Send button clicked for record:", record);
  };
  const handleGradingPointChange = (index, key, value) => {
    const updatedGradingPoints = [...gradingPoints];
    updatedGradingPoints[index][key] = value;
    setGradingPoints(updatedGradingPoints);
  };

  const handleInternalAssessmentChange = (value) => {
    if (value + midsemPercentage + endsemPercentage <= 100) {
      setInternalAssessmentPercentage(value);
    } else {
      openNotification({
        type: "warning",
        message: "Total percentage exceeds 100",
      });
    }
  };

  const handleMidsemChange = (value) => {
    if (internalAssessmentPercentage + value + endsemPercentage <= 100) {
      setMidsemPercentage(value);
    } else {
      openNotification({
        type: "warning",
        message: "Total percentage exceeds 100",
      });
    }
  };

  const handleEndsemChange = (value) => {
    if (internalAssessmentPercentage + midsemPercentage + value <= 100) {
      setEndsemPercentage(value);
    } else {
      openNotification({
        type: "warning",
        message: "Total percentage exceeds 100",
      });
    }
  };

  const onSelectChange = (e) => {
    console.log(e);
    setResult(null);
    setResultSelect(null);
    let obj = data.find((o) => o._id === e);
    if (obj.uploaded) {
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
              endsem: item.grades[0].endSemMarks,
              grade: item.grades[0].grade,
              finalmarks: item.grades[0].finalMarks,
              evaluationId:item.grades[0].evaluation
            });
          });
          setResult(dataSource);
          console.log(data[0].grades[0].evaluation);
          console.log(dataSource);
        })
        .catch((err) => {
          return openNotification({
            type: "error",
            message: "An Error Occurred!",
          });
        });
    } else {
      setResultSelect(e);
    }
  };
const downloadResult = (evaluationId) => {
  console.log("Downloading result for evaluationId:", evaluationId);
  getAwardSheet({ evaluationId: evaluationId })
    .then((data) => {
      const url = window.URL.createObjectURL(data);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${evaluationId}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Error while downloading result:", error);
      // Handle the error accordingly, such as showing a notification
      // show notification

      openNotification({
        type: "error",
        message: "Error while downloading result",
      });
    });
};

  const submitResult = (e) => {
    console.log(e)
    e.preventDefault();
    if (file === null) {
      return openNotification({
        type: "warning",
        message: "Please Select A File First",
      });
    }

    let obj = data.find((o) => o._id === resultSelect);
    newResult({
      file: file,
      value: resultSelect,
      subjectName: obj.subjectName,
      subjectCode: obj.subjectCode,
      semester: obj.semester,
      parameters: {
        grade: gradingPoints,
        internalAssessmentPercentage: internalAssessmentPercentage,
        midsemPercentage: midsemPercentage,
        endsemPercentage: endsemPercentage,
      },
    })
      .then((res) => {
        openNotification({
          type: "success",
          message: "Result Uploaded! You Would Be Refreshed!",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        return openNotification({ type: "error", message: "Error Occurred!" });
      });
  };

  const fileChange = (e) => {
    const f = e.target.files[0];
    let name = f.name.split(".");
    if (name[1] !== "xlsx") {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      return openNotification({
        type: "warning",
        message: "Only .XLSX File Are Allowed",
      });
    }
    var reader = new FileReader();
    reader.readAsDataURL(f);
    reader.onload = () => {
      setFile(reader.result);
    };
  };

 

  const tabs = [
    {
      key: "1",
      label: "Evaluate",
      children: (
        <div>
          {loading ? (
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
              {/* create a button to downlaod result */}
              <div style={{ padding: "10px", textAlign: "right" }}>
                <Button
                  type="primary"
                  onClick={() => downloadResult(result[0].evaluationId)}
                  // onClick={console.log(result[0].evaluationId)}
                >
                  Download Result
                </Button>
              </div>
            </div>
          )}
          {!resultSelect ? (
            ""
          ) : (
            <Form onSubmit={submitResult}>
              <Form.Item label="Drag and Drop .XLSX File">
                <Input
                  style={{ height: "200px" }}
                  type="file"
                  onChangeCapture={fileChange}
                  onChange={fileChange}
                  placeholder="Drag and drop files or click"
                />
              </Form.Item>
              {/* Create a form with dropdown to choose the grading system 1)grading ratio between midsem, endsem and internal assesment. 2)grading points */}

              <Form.Item label="Grading System">
                <div>Assessment Ratio:</div>
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item label="Internal Assessment (%):">
                      <InputNumber
                        min={0}
                        max={100}
                        defaultValue={internalAssessmentPercentage}
                        onChange={handleInternalAssessmentChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Midsem (%):">
                      <InputNumber
                        min={0}
                        max={100}
                        defaultValue={midsemPercentage}
                        onChange={handleMidsemChange}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Endsem (%):">
                      <InputNumber
                        min={0}
                        max={100}
                        defaultValue={endsemPercentage}
                        onChange={handleEndsemChange}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <div>Grading Points:</div>
                {gradingPoints.map((item, index) => (
                  <Row
                    key={index}
                    style={{
                      display: "flex",
                    }}
                  >
                    <Col span={8} style={{ width: "100%" }}>
                      <span>{item.grade}:</span>
                    </Col>
                    <Col
                      span={8}
                      style={{ paddingLeft: "10px", paddingRight: "5px" }}
                    >
                      <span>Min Limit:</span>
                      <InputNumber
                        min={0}
                        max={100}
                        defaultValue={item.min}
                        onChange={(value) =>
                          handleGradingPointChange(index, "min", value)
                        }
                      />
                    </Col>
                    <Col span={8}>
                      <span>Max Limit:</span>
                      <InputNumber
                        min={0}
                        max={100}
                        defaultValue={item.max}
                        onChange={(value) =>
                          handleGradingPointChange(index, "max", value)
                        }
                      />
                    </Col>
                  </Row>
                ))}
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit" type="primary" onClick={submitResult}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      ),
    },
    {
      key: "2",
      label: "See Pending Evaluations",
      children: (
        <div style={{ maxHeight: "400px" }}>
          <h4>Faculty who have not generated award sheet</h4>{" "}
          <Table
            dataSource={evaData}
            columns={columns2}
            pagination={false}
            scroll={{ y: 300 }}
          />
          {/* add button for send all */}
          <div style={{ padding: "10px", textAlign: "right" }}>
            <Button type="primary" style={{}}>
              Send All
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ManagementBase>
      {contextHolder}
      <PageTitle title="Evaluation" />
      <Space />
      <Tabs defaultActiveKey="2" items={tabs} />
    </ManagementBase>
  );
};

export default ManagementEvaluate;
