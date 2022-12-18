import React from "react";
import { Program } from "../components/Functions";

const HappyHour = (props) => {
  return (
    <main style={{ padding: "1rem 0" }}>
      {!props.twoHoursProgram && !props.threeHoursProgram && (
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          No programs. Go to settings and enable program!
        </h4>
      )}
      <div>
        <h5>{props.twoHoursProgram && "Two hours program"}</h5>
        {props.pricesToday && props.twoHoursProgram && (
          <Program hours={2} prices={props.pricesToday} day="today" />
        )}
        {props.pricesTomorrow && props.twoHoursProgram && (
          <Program hours={2} prices={props.pricesTomorrow} day="tomorrow" />
        )}
      </div>
      <p> </p>
      <div>
        <h5>{props.threeHoursProgram && "Three hours program"}</h5>
        {props.pricesToday && props.threeHoursProgram && (
          <Program hours={3} prices={props.pricesToday} day="today" />
        )}
        {props.pricesTomorrow && props.threeHoursProgram && (
          <Program hours={3} prices={props.pricesTomorrow} day="tomorrow" />
        )}
      </div>
      <p> </p>
      <div>
        <h5>{props.fourHoursProgram && "Four hours program"}</h5>
        {props.pricesToday && props.fourHoursProgram && (
          <Program hours={4} prices={props.pricesToday} day="today" />
        )}
        {props.pricesTomorrow && props.fourHoursProgram && (
          <Program hours={4} prices={props.pricesTomorrow} day="tomorrow" />
        )}
      </div>
      <p> </p>
      <div>
        <h5>{props.fiveHoursProgram && "Five hours program"}</h5>
        {props.pricesToday && props.fiveHoursProgram && (
          <Program hours={5} prices={props.pricesToday} day="today" />
        )}
        {props.pricesTomorrow && props.fiveHoursProgram && (
          <Program hours={5} prices={props.pricesTomorrow} day="tomorrow" />
        )}
      </div>
    </main>
  );
};
export default HappyHour;
