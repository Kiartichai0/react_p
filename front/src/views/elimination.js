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
import { getElimination } from "../functions/function";

function Elimination() {
  const navigate = useNavigate();
  const [a00, seta00] = useState(6);
  const [a01, seta01] = useState(-4);
  const [a02, seta02] = useState(1);
  const [a10, seta10] = useState(-4);
  const [a11, seta11] = useState(6);
  const [a12, seta12] = useState(-4);
  const [a20, seta20] = useState(1);
  const [a21, seta21] = useState(-4);
  const [a22, seta22] = useState(6);

  const [b1, setb1] = useState(-14);
  const [b2, setb2] = useState(36);
  const [b3, setb3] = useState(6);

  const [x0, setx0] = useState();
  const [x1, setx1] = useState();
  const [x2, setx2] = useState();


  const back = () => {
    navigate("/");
  };

  const generate = () => {
    const data = {
      A:[[a00,a01,a02],
      [a10,a11,a12],
      [a20,a21,a22]],
      b:[b1,b2,b3]
      
    };
    getElimination(data).then((res) => {
      setx0(res[0])
      setx1(res[1])
      setx2(res[2])
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "5%" }}>
        <Col sm="4"></Col>
        <Col sm="4">
        <div className="text">
           <h2  align= "center"><u>Linear Equations</u></h2>
        <Card style={{ marginTop: "40px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
        <div className="text-center">
          <h4>Elimination Phase</h4>
          <p>Ax=b</p>
          <p>A[i,j]=A[i,j]−λA[k,j],j=k,k+1,...,n</p>
          <p>bi=bi−λbk</p>
          <h4>Back Substitution</h4>
          <p>Ux=c</p>
          <p>หลังจาก elimination phase ไปแล้วจะได้ U=A,c=b</p>
          <p>จึงเขียนใหม่ได้เป็น</p>
          <p>x[k]=b[k]−(∑(j=k+1)=>(n)(A[k,j]*x[j]))*1/A[k,k]</p>
          </div>
        <h5 style={{ marginTop: "10px", marginLeft: "10px" }} ></h5>
           <h5 style={{ marginTop: "50px", marginRight: "110px",margin: "70px",}}>
           <b>example:</b><br></br>
            &nbsp; A : &nbsp;R1 = [ 6, -4 , 1] ,<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R2 = [-4 , 6 , -4] ,<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R3 = [1 , -4 , 6] <br></br>
            &nbsp;  B : Col = [-14 , 36 , 6] 
           </h5>
        
          </Card>
        </div>
          <Card style={{ marginTop: "20px", marginRight: "0px",alignItems: "center",backgroundColor: "#B0C4DE" }}>


            <Row>
              <div className="text-center">
                <h3 style={{marginTop:50}}>A</h3>
                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a00}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta00(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width: 60,
                    }}
                    value={a01}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta01(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a02}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta02(e.target.value)}
                  />
                </Row>

                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a10}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta10(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a11}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta11(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a12}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta12(e.target.value)}
                  />
                </Row>

                <Row>
                  <Input
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a20}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta20(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a21}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta21(e.target.value)}
                  />
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={a22}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => seta22(e.target.value)}
                  />
                </Row>
              </div>

              <div className="text-center" style={{ marginLeft: "100px" }}>
              <h3 style={{marginTop:50}}>B</h3>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={b1}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb1(e.target.value)}
                  />
                </Row>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={b2}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb2(e.target.value)}
                  />
                </Row>
                <Row>
                  <Input
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                      marginBottom: "20px",
                      width:60,
                    }}
                    value={b3}
                    type="text"
                    name="bit2string"
                    id="bit2string"
                    onChange={(e) => setb3(e.target.value)}
                  />
                </Row>
              </div>
            </Row>
            <Row style={{ marginBottom: "50px" }}>
              <Col sm="8">
                <Button onClick={generate} color="danger">
                  <div style={{ width: 200 }}>
                    <h3 style={{ marginTop: "5px" }}>คำนวณ</h3>
                  </div>
                </Button>
              </Col>
              <Col sm="4">
                <Button onClick={back} color="primary">
                  <div style={{ width: 100 }}>
                    <h3 style={{ marginTop: "5px",marginRigth:"20" }}>กลับ</h3>
                  </div>
                </Button>
              </Col>
            </Row>
          </Card>
          <div>
          <Card style={{ marginTop: "40px", marginRight: "0px",margin: "10",backgroundColor: "" }}>
              <h4 style={{ marginTop: "10px", marginLeft: "10px" }} >คำตอบ:</h4>
                <h4 style={{marginBottom: "10px",marginLeft:"90px" }}>
                  x0 =  {x0}
                  </h4>
                  <h4 style={{marginBottom: "10px",marginLeft:"90px" }}>
                  x1 = {x1}  
                  </h4>
                  <h4 style={{marginBottom: "10px",marginLeft:"90px" }}>
                  x2 =  {x2}
                  </h4>
        </Card>
        </div>
        </Col>
        <Col sm="4"></Col>
      </Row>
      
    </div>
  );
}
export default Elimination;
