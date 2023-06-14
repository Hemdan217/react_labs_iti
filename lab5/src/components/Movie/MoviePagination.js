import React from "react";

const MoviePagination = (props) => {
  return (
    <>
      <div className="d-flex justify-content-around">
        <button
          disabled={props.page == 1 ? true : false}
          className="btn btn-primary"
          onClick={() => {
            props.decrement();
          }}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            props.increment();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default MoviePagination;
