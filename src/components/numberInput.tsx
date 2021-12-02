import React, { useState } from "react";
import { findMedian } from "../api/calculationApi";
import { NumberOutput } from "./numberOutput";

interface values {
  value: number;
  median: number[];
}

export const NumberInput = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [values, setValues] = useState<values[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue === 0) {
            return setErrorMsg("Pick a number greater then 0!");
          }
          findMedian(inputValue)
            .then((res) => {
              setValues((prevState) => [
                { value: inputValue, median: res.data },
                ...prevState,
              ]);
            })
            .catch((e) => {
              console.log(e);
            });
        }}
      >
        <input
          type={"number"}
          onChange={(e) => {
            setErrorMsg("");
            setInputValue(+e.target.value);
          }}
        ></input>
        <br />
        <button type={"submit"}>Send</button>
      </form>
      <button
        onClick={() => {
          setValues([]);
          setErrorMsg("");
        }}
      >
        Clear
      </button>
      {errorMsg && <p className="error">{errorMsg}</p>}
      {values.map((value) => {
        return (
          <NumberOutput
            inputValue={value.value}
            median={value.median}
            key={`${value.value}${Math.random() * 100}`}
          />
        );
      })}
    </div>
  );
};
