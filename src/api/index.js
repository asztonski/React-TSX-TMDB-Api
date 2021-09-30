const API_KEY = '&api_key=30681930d9f8a4d49ec75249be9647a1';
const BASE_URL = 'https://api.themoviedb.org/3'
const COMEDY_URL = '/discover/movie?with_genres=35'
const FETCH_URL = BASE_URL + COMEDY_URL + API_KEY

// let movieArr = null;

// export async function getMovies() {
//   const response = await fetch(FETCH_URL);
//   const getData = await response.json();
//   const data = getData.results;

//   return movieArr = data
// }

// getMovies()

// console.log(movieArr)
 
//   const rateSortedArr =  data.sort((a ,b ) => b.vote_average - a.vote_average);
//   const nameSortedArr = data.sort((a ,b ) => {
//     if (a.title.toLowerCase() < b.title.toLowerCase())
//     return -1;
//     if (a.title.toLowerCase() > b.title.toLowerCase())
//     return 1;
  
//   return 0;
// })

// console.log(rateSortedArr, nameSortedArr)


export default FETCH_URL

