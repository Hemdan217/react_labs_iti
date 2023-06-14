import React from "react";
import "./MovieItem.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
export default function MovieItem({ movie }) {
  console.log(movie);
  const favoriteMovies = useSelector((state) => state.favorite);

  movie.favorite = favoriteMovies.some(
    (favoriteMovie) => favoriteMovie.id === movie.id
  );
  const s = Swal.mixin({
    toast: true,
    animation: false,
    position: "top-right",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
  });
  const dispatch = useDispatch();
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

            <div className="d-flex justify-content-around">
              <Link className="btn btn-primary" to={`/movie/${movie.id}`}>
                Go To Details
              </Link>
              <button
                className={
                  movie.favorite ? "btn btn-danger" : "btn btn-primary"
                }
                onClick={() => {
                  movie.favorite
                    ? dispatch({ type: "remove", payload: movie })
                    : dispatch({ type: "adding", payload: movie });
                  s.fire({
                    title: movie.favorite
                      ? "Remove From Favorite"
                      : "Add To Favorite",

                    icon: movie.favorite ? "error" : "success",
                  });
                }}
              >
                {movie.favorite ? <FaTrash /> : <FaHeart />}
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
