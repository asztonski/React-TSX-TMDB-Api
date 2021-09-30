import React, {useEffect ,useState} from 'react';
import Card from './Card';
import './Main.css'
import FETCH_URL from '../../api';

interface IState {
    movies: {
        img: string
        title: string
        rate: any
        about: string
        note?: string
    }[]
}

function CardsSortedByName() {


     const [movies, setMovies] = useState<IState["movies"]>([
         {
             img: "",
             title: '',
             rate: '',
             about: ''
         }
     ])

     useEffect(() => {
        fetch(FETCH_URL)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
      
      
      }, []);

      const nameSortedArr = movies.sort((a ,b ) => {
        if (a.title.toLowerCase() < b.title.toLowerCase())
        return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase())
        return 1;
      
      return 0;
    })

    return [ <>(
        <div className="container flex">
          <Card movies={movies}/>
        </div>
    )</>];
    }

export default CardsSortedByName;