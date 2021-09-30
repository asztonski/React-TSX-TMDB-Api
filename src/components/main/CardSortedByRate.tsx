import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Main.css";
import FETCH_URL from "../../api";

interface IState {
  movies: {
    poster_path: string;
    title: string;
    vote_average: any;
    overview: string;
    note?: string;
  }[];
}

function CardsSortedByRate() {
  const [movies, setMovies] = useState<IState["movies"]>([
    {
      poster_path: "",
      title: "",
      vote_average: "",
      overview: ""
    }
  ]);

  useEffect(() => {
    fetch(FETCH_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const rateSortedArr = movies.sort((a, b) => b.vote_average - a.vote_average);

  return [
    <>
      (
      <div className="container flex">
        <Card movies={rateSortedArr} />
      </div>
      )
    </>
  ];
}

export default CardsSortedByRate;
