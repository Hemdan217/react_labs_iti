import React from "react";
import "./MovieItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
export default function MovieItem({ movie }) {
  return (
    <>
      <Col lg="3" md="4" sm="6" className="mx-auto mb-4">
        <Card>
          <div className="card-image">
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="img-fluid rounded-top"
            />
            <div className="image-overlay">
              <p>relaese date: {movie.release_date}</p>
              <p>popularity: {movie.popularity}</p>
              <p>vote average: {movie.vote_average}</p>
              <p>vote count: {movie.vote_count}</p>
            </div>
          </div>
          <Card.Body>
            <Card.Title> {movie.original_title.slice(0, 20)}</Card.Title>
            <Card.Text>{movie.overview.slice(0, 50)}</Card.Text>

            <Link className="btn btn-primary" to={`/movie/${movie.id}`}>
              Go To Details
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
