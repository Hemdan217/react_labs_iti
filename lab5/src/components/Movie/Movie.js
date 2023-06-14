import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getMovies, searchForMovies } from "../../redux/actions.js";

import { useState, useEffect } from "react";
import { authContext } from "./../../contextAPI/context.js";
import { useContext } from "react";

// import { NavLink, useParams } from "react-router-dom";
import MovieItem from "./MovieItem.js";
import Spinner from "./Spinner.js";
import MovieSearch from "./MovieSearch.js";
import MoviePagination from "./MoviePagination.js";
import PaginateReact from "./PaginateReact.js";
import { useSelector, useDispatch } from "react-redux";

export default function Movies() {
  // const [allmovies, setMovies] = useState([]);
  const allmovies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { lang } = useContext(authContext);

  // const [pageCount, setPageCount] = useState(1);
  const pageCount = useSelector((state) => state.movies.total_pages);

  // const { page } = useParams();
  const loading = useSelector((state) => {
    return state.loader.loader;
  });
  const handleFilter = (word) => {
    if (word) {
      dispatch(searchForMovies(word));
    } else if (word == "") {
      fetchMovies();
    }
  };
  const fetchMovies = () => {
    dispatch(getMovies(page, lang));
  };
  useEffect(fetchMovies, []);
  useEffect(fetchMovies, [page, lang]);
  return (
    <>
      <Container fluid bg-secondary="true">
        <Container className="p-4">
          <MovieSearch onSearch={handleFilter} />
          {loading && <Spinner />}

          {!loading && (
            <Row>
              {allmovies.map((movie) => {
                return (
                  <MovieItem
                    movie={movie}
                    key={movie.original_title + `${Math.random()}`}
                  />
                );
              })}
            </Row>
          )}
          <MoviePagination
            page={page}
            increment={() => {
              setPage(page + 1);
            }}
            decrement={() => {
              setPage(page - 1);
            }}
          />

          <PaginateReact
            pageCount={pageCount}
            onSet={(p) => {
              setPage(p);
            }}
          />
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
// <div className="d-flex justify-content-center">
//   {[1, 2, 3, 4, 5].map((n) => {
//     return (
//       <NavLink
//         key={n}
//         style={test}
//         className="text-decoration-none  p-2 m-1"
//         to={`/movies/${n}`}
//       >
//         {n}
//       </NavLink>
//     );
//   })}
// </div>;
// const test = ({ isActive }) => {
//   if (isActive) {
//     return {
//       backgroundColor: "black",
//     };
//   }
// };
// setTimeout(() => {
//   setLoading(true);
// }, 200);
//

// axiosConfig
//   .get("/movie/popular", {
//     params: {
//       page,
//     },
//   })
//   .then((res) => {
//     setMovies(res.data.results);
//     setPageCount(res.data.total_pages);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// axiosConfig
//   .get("/search/movie", {
//     params: {
//       query: word,
//     },
//   })
//   .then((res) => {
//     setMovies(res.data.results);
//     setPageCount(res.data.total_pages);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
