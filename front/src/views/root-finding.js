import React, { useState } from "react";
import {
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Card,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { getRootFinding } from "../functions/function";

function RootFinding() {
  const navigate = useNavigate();
  const [a, seta] = useState(0);
  const [b, setb] = useState(1);
  const [dx, setdx] = useState(0.0001);
  const [result, setresult] = useState();

  const back = () => {
    navigate("/");
  };


  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="3"></Col>
        <Col sm="6">
          <div className="text-center">
            <h2 style={{ marginTop: "20px", marginRight: "20px" }}>
              Root-finding
            </h2>
          </div>
          <div className="text">
            <h4>Incremental Search Method</h4>
            <p>กำหนด f(x)=x3−10x2+5 จงหารากของสมการ f(x) * จะเห็นว่าเมื่อ x=0 แล้ว sign(f(0)) จะมีค่าเป็น + * เมื่อ x=1 แล้ว sign(f(1)) จะมีค่าเป็น - * สันนิษฐานว่า root จะมีค่าอยู่ระหว่าง (0,1) จงหา root ของ f(x) ให้มีค่าใกล้เคียง 4 หลัก โดยเราจะใช้ Δ=0.0001</p>
            <p>example:</p>
            <p>&nbsp;&nbsp;&nbsp;a = 0</p>
            <p>&nbsp;&nbsp;&nbsp;b = 1</p>
            <p>&nbsp;&nbsp;&nbsp;dx = 0.0001</p>
          </div>

          <Card style={{ alignItems: "center" }}>
            <Row style={{ marginTop: "50px" }}>
              <Col></Col>
            </Row>

            <Row>
              <div className="text-center">
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>a:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={a}
                    onChange={(e) => seta(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>b:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={b}
                    onChange={(e) => setb(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
                <Row>
                  <h3 style={{ marginTop: "20px", marginRight: "20px" }}>dx:</h3>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 100,
                    }}
                    value={dx}
                    onChange={(e) => setdx(e.target.value)}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                  />
                </Row>
              </div>
            </Row>
            <h4 style={{ marginBottom: "10px" }}>Result: {result}</h4>

            <Row style={{ marginBottom: "30px" }}>
              <Col sm="8">
                <Button onClick={generate} color="danger">
                  <div style={{ width: 300 }}>
                    <h3 style={{ marginTop: "10px" }}>คำนวณ</h3>
                  </div>
                </Button>
              </Col>
              <Col sm="4">
                <Button onClick={back} color="primary">
                  <div style={{ width: 100 }}>
                    <h3 style={{ marginTop: "10px" }}>กลับ</h3>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col sm="3"></Col>
      </Row>
    </div>
  );
}
export default RootFinding;
