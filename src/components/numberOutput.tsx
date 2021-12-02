import React from "react";

interface NumberOutputProps {
  inputValue: number;
  median: number[];
}

export const NumberOutput = (props: NumberOutputProps) => {
  return (
    <p>
      Median for prime numbers lesser or equal {props.inputValue} is :
      {props.median.length === 1 ? (
        <strong>{props.median[0]} </strong>
      ) : (
        <strong>
          {props.median[0]}
          <span style={{ fontWeight: "400" }}> and </span> {props.median[1]}
        </strong>
      )}
    </p>
  );
};
