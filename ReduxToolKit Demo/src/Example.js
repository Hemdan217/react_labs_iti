import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addOne,
  minOne,
  reset,
  incrementBy,
  decrementBy,
} from "./redux/reducers.js";
const Example = () => {
  const count = useSelector((state) => state.appReducer.count);
  const number = useRef();
  // change the data
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container p-4  text-center">
        <div className="m-auto">
          <h1>Number </h1>
          <h1>{count} </h1>
          <button
            className="btn btn-primary m-4"
            onClick={() => {
              dispatch(addOne());
            }}
          >
            Increase
          </button>
          <button
            className="btn btn-primary m-4"
            onClick={() => {
              dispatch(minOne());
            }}
          >
            decrease
          </button>
          <button
            className="btn btn-primary m-4"
            onClick={() => {
              dispatch(reset());
            }}
          >
            reset
          </button>
          <input type="number" ref={number} />
          <button
            className="btn btn-primary m-4"
            onClick={() => {
              dispatch(incrementBy(parseInt(number.current.value)));
              number.current.value = 0;
            }}
          >
            Increase By
          </button>
          <button
            className="btn btn-primary m-4"
            onClick={() => {
              dispatch(decrementBy(parseInt(number.current.value)));
              number.current.value = 0;
            }}
          >
            decrease By
          </button>
        </div>
      </div>
    </div>
  );
};

export default Example;
