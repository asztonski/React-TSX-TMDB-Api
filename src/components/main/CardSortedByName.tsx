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

function CardsSortedByName() {
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

  const nameSortedArr = movies.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;

    return 0;
  });

  return [
    <>
      (
      <div className="container flex">
        <Card movies={nameSortedArr} />
      </div>
      )
    </>
  ];
}

export default CardsSortedByName;
