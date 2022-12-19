import React from "react";
import Switch from "../components/Switch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootModal from "../components/BootModal";

const Settings = (props) => {
  return (
    <div style={{ padding: "1rem 0" }}>
      <Container>
        <Row>
          <Col xs={1}>
            <Switch
              checked={props.twoHoursProgram}
              onChange={() => {
                props.setTwoHoursProgram(!props.twoHoursProgram);
              }}
            />
          </Col>
          <Col>
            <h2>2h program</h2>
          </Col>
          <Row>
            <Col xs={1}>
              <Switch
                checked={props.threeHoursProgram}
                onChange={() => {
                  props.setThreeHoursProgram(!props.threeHoursProgram);
                }}
              />
            </Col>
            <Col>
              <h2>3h program</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={1}>
              <Switch
                checked={props.fourHoursProgram}
                onChange={() => {
                  props.setFourHoursProgram(!props.fourHoursProgram);
                }}
              />
            </Col>
            <Col>
              <h2>4h program</h2>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col xs={1}>
            <Switch
              checked={props.fiveHoursProgram}
              onChange={() => {
                props.setFiveHoursProgram(!props.fiveHoursProgram);
              }}
            />
          </Col>
          <Col>
            <h2>5h program</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <BootModal
              setTwoHoursProgram={props.setTwoHoursProgram}
              setThreeHoursProgram={props.setThreeHoursProgram}
              setFourHoursProgram={props.setFourHoursProgram}
              setFiveHoursProgram={props.setFiveHoursProgram}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Settings;
