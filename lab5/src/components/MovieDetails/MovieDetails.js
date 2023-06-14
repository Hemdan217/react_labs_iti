import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHeart, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { authContext } from "./../../contextAPI/context.js";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "./Spinner.js";
import { axiosConfig } from "../axiosConfig/axiosConfig.js";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const s = Swal.mixin({
  toast: true,
  animation: false,
  position: "top-right",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
});
export default function MovieDetails() {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const favoriteMovies = useSelector((state) => state.favorite);
  const { lang } = useContext(authContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchMovies = () => {
    axiosConfig
      .get(`/movie/${id}`, {
        params: {
          language: lang,
        },
      })
      .then((res) => {
        console.log(res);
        Object.assign(movie, res.data);

        movie.favorite = favoriteMovies.some(
          (favoriteMovie) => favoriteMovie.id == movie.id
        );
        setMovie(movie);
        setTimeout(() => {
          setLoading(true);
        }, 200);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(fetchMovies, []);
  useEffect(fetchMovies, [lang]);
  return (
    <>
      <Container fluid bg-secondary="true">
        <Container className="p-4">
          {!loading && <Spinner />}

          {loading && (
            <Row>
              <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                  <div className="card-detalis  d-flex align-items-center ">
                    <img
                      className="img-movie w-30"
                      src={
                        `https://image.tmdb.org/t/p/w500/` + movie.poster_path
                      }
                      alt="ascad"
                    />
                    <div className="justify-content-center text-center  mx-auto">
                      <p className="card-text-details border-bottom">
                        name : {movie.title}
                      </p>
                      <p className="card-text-details border-bottom">
                        release date :{movie.release_date}
                      </p>
                      <p className="card-text-details border-bottom">
                        vore count : {movie.vote_count}
                      </p>
                      <p className="card-text-details border-bottom">
                        average vote :{movie.vote_average}
                      </p>
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
                          movie.favorite = !movie.favorite;

                          setMovie(movie);
                        }}
                      >
                        {movie.favorite ? <FaTrash /> : <FaHeart />}
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                  <div className="card-story  d-flex flex-column align-items-start">
                    <div className="text-end p-4 ">
                      <p className="card-text-title border-bottom">overview:</p>
                    </div>
                    <div className="text-end px-2">
                      <p className="card-text-story">{movie.overview}</p>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col
                  md="10"
                  xs="12"
                  sm="12"
                  className="mt-2 d-flex justify-content-around "
                >
                  <Button
                    variant="primary"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Go Back
                  </Button>

                  <a href={movie.homepage}>
                    <button
                      style={{ backgroundColor: "#b45b35", border: "none" }}
                      className="btn btn-primary"
                    >
                      Watch Movie
                    </button>
                  </a>
                </Col>
              </Row>
            </Row>
          )}
        </Container>
      </Container>
    </>
  );
}

// async () => {
//   try {
//     let res = await axiosConfig.get("/movie/popular");
//     console.log(res);
//     setMovies(res.results);
//   } catch (e) {
//     console.log(e);
//   }
// };
