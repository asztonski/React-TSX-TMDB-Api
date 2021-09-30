import React, { Component, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchBarComponent from "./components/searchbar/Searchbar";
import CardsSortedByName from "./components/main/CardSortedByName";
import CardsSortedByRate from "./components/main/CardSortedByRate";

// const [ rateSortedArr ] = CardsSortedByRate();

// console.log(nameSortedArr)

class App extends Component {
  constructor() {
    super();
    this.state = {
      sortedBy: "name",
      searchfield: ""
      // nameSortedArr: nameSortedArr,
      // rateSortedArr: rateSortedArr
    };
    // const [ nameSortedArr ] = CardsSortedByName();
    // console.log(CardsSortedByName)
  }

  // onSearchChange = (e) => {
  //   if (this.state.sortedBy === 'name') {
  //     const filteredMoviesByName = this.state.nameSortedArr.filter(movie => {
  //       return movie.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
  //     })
  //   // } else {
  //   //   const filteredMoviesByRate = this.state.rateSortedArr.filter(movie => {
  //   //     return movie.title.toLowerCase().includes(this.state.searchfield.toLowerCase())
  //   // })
  //  }
  //   // console.log(filteredMovies)
  // }

  sortByTitle = () => {
    this.setState({ sortedBy: "name" });
  };

  sortByRate = () => {
    this.setState({ sortedBy: "rate" });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <SearchBarComponent 
        // searchChange={this.onSearchChange}
         />
        <div className="flex buttonbox">
          <p>Sort by:</p>
          <button onClick={this.sortByTitle}>Title</button>
          <button onClick={this.sortByRate}>Rate</button>
        </div>
        {this.state.sortedBy === "name" ? (
          <CardsSortedByName
          //  movies={this.state.nameSortedArr}
          />
        ) : (
          <CardsSortedByRate
          //  movies={this.state.rateSortedArr}
          />
        )}
      </div>
    );
  }
}
export default App;
