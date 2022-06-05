import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Col, Row, Card, Button } from "reactstrap";
import axios from "axios";
import { API_URL } from "./constants";

let morningSlots = [
  "9 AM",
  "9.30 AM",
  "10 AM",
  "10.30 AM",
  "11 AM",
  "11.30 AM",
  "12 PM",
];

let eveningSlots = [
  "5 AM",
  "5.30 AM",
  "6 AM",
  "6.30 AM",
  "7 AM",
  "7.30 AM",
  "8 PM",
];

export default function AddSlot(props) {
  const [date, setDate] = useState(new Date());
  const [slottime, setSlottime] = useState("");

  async function handleSubmit() {
    let url = API_URL + "/addSlots";
    let data = {
      slottime,
    };
    await axios
      .post(url, { data })
      .then((res) => {
        props.history.push("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  return (
    <Row>
      <Col style={{ backgroundColor: "white" }} xs="4" className="p-5">
        <h5 color="red">Appointments</h5>
        <DatePicker
          value={date}
          format={"dd/MM/yyyy"}
          isOpen={true}
          onChange={(date) => setDate(date)}
        />
        <Button color="primary" className="m-5" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </Col>
      <Col className="p-5">
        <Card style={{ backgroundColor: "white" }}>
          <h5 color="red">Morning</h5>
          <Row xs="3">
            {morningSlots.map((data, index) => {
              return (
                <Button
                  color={data == slottime ? "primary" : "light"}
                  className="m-1"
                  key={index}
                  onClick={() => setSlottime(data)}
                >
                  {data}
                </Button>
              );
            })}
          </Row>
          <h5 color="red">Evening </h5>
          <Row xs="3">
            {eveningSlots.map((data, index) => {
              return (
                <Button
                  color={data == slottime ? "primary" : "light"}
                  className="m-1"
                  onClick={() => setSlottime(data)}
                  key={index}
                >
                  {data}
                </Button>
              );
            })}
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
