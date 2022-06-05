import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import axios from "axios";
import { API_URL } from "./constants";
import * as action from "./redux/actions/appointments";
import { Link } from "react-router-dom";

function BookingSlot(props) {
  useEffect(() => {
    getAppointments();
  }, []);

  async function getAppointments() {
    await axios
      .get(API_URL)
      .then((res) => {
        if (res?.data) {
          let data = res?.data;

          props.setAppointments(data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
  return (
    <div>
      <Link to={"/addSlot"}>
        <Button color="primary">Add Slot</Button>
        <Table>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Contact Number</th>
              <th>Slot Time</th>
            </tr>
          </thead>
          <tbody>
            {props?.appointments?.map((data, index) => {
              return (
                <tr key={index}>
                  <th>{data.patientName}</th>
                  <th>{data.contactName}</th>
                  <th>{data.slotTime}</th>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    appointments: state.ListReducer.appointments,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    setAppointments: (data) => dispatch(action.saveAppointments(data)),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(BookingSlot);
