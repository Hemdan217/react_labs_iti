import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import MovieItem from "../Movie/MovieItem.js";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

import Row from "react-bootstrap/Row";
const Favorite = () => {
  const favoriteMovies = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  return (
    <>
      <Container fluid bg-secondary="true">
        <Container className="p-4 " style={{ minHeight: "500px" }}>
          <Row className="text-center">
            <Col lg="2">
              <button
                className="btn btn-secondary w-10"
                onClick={() => {
                  dispatch({ type: "removeAll" });
                }}
              >
                <FaTrash />
              </button>
            </Col>
          </Row>
          <Row>
            {favoriteMovies.map((movie) => {
              return (
                <MovieItem
                  movie={movie}
                  key={movie.original_title + `${Math.random()}`}
                />
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Favorite;
