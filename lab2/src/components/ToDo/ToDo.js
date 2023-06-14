import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import ToDoItem from "./ToDoItem.js";
import { useState } from "react";
export default function ToDo() {
  const [toDos, setToDos] = useState([]);
  const [todo, setToDo] = useState({
    title: "",
    isDone: false,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setToDos([...toDos, todo]);
    setToDo({
      ...todo,
      title: "",
    });
  };
  const handleChange = (evt) => {
    setToDo({ ...todo, title: evt.target.value });
  };
  const DeleteItem = (title) => {
    const newItems = toDos.filter((item) => item.title != title);
    setToDos([...newItems]);
  };
  const MarkItem = (title) => {
    const markedItem = toDos.find((item) => item.title == title);

    markedItem.isDone = true;
    console.log(markedItem);
    setToDos([...toDos]);
    console.log(toDos);
  };

  return (
    <>
      <Container className="w-50 m-5 mx-auto">
        <Form onSubmit={(evt) => handleSubmit(evt)}>
          <Form.Group className="mb-3">
            <Form.Label>Enter To Do :</Form.Label>
            <Form.Control
              type="text"
              name="todo"
              placeholder="Enter Enter To Do"
              value={todo.title}
              onChange={(evt) => {
                handleChange(evt);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={!todo.title}>
            Add New To Do
          </Button>
          {toDos.map((toDo) => {
            return (
              <ToDoItem
                toDo={toDo}
                onDelete={DeleteItem}
                onDone={MarkItem}
                key={toDo.title}
              />
            );
          })}
        </Form>
      </Container>
    </>
  );
}
