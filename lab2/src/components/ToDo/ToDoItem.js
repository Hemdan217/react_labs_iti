import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
export default function ToDoItem(props) {
  return (
    <>
      <Container className=" mx-auto p-2 d-flex justify-content-between">
        <div
          className={`text-success ${
            props.toDo.isDone ? "text-decoration-line-through" : ""
          }`}
        >
          {props.toDo.title}
        </div>
        <div>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              props.onDone(props.toDo.title);
            }}
          >
            {props.toDo.isDone ? "Done" : "Mark As Done"}
          </Button>
          <Button
            variant="danger"
            type="button"
            style={{ marginLeft: "10px" }}
            onClick={() => {
              props.onDelete(props.toDo.title);
            }}
          >
            Delete
          </Button>
        </div>
      </Container>
    </>
  );
}
