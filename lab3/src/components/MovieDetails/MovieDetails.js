import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";

import Spinner from "./Spinner.js";
import { axiosConfig } from "../axiosConfig/axiosConfig.js";
import { useState, useEffect } from "react";

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fetchMovies = () => {
    axiosConfig
      .get(`/movie/${id}`)
      .then((res) => {
        console.log(res);
        setMovie(res.data);
        setTimeout(() => {
          setLoading(true);
        }, 200);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(fetchMovies, []);
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
