import React from 'react';

interface IProps {
    movies: {
        img: string
        title: string
        rate: number
        about: string
        note?: string
    }[]
}

const Card: React.FC<IProps> = ( { movies }) => {

    const renderCard = (): JSX.Element[] => {
        return movies.map((movie) => {
            return (
                <div>
                <img alt={movie.title} src={movie.img}></img>
                <div className="flex">
                    <h3 className="title">{movie.title}</h3>
                    <p>{movie.rate}</p>
                </div>
                <p className="about">{movie.about}</p>
                </div>
            )
        })
    }

    return (
        <div className="card">
            {renderCard()}
        </div>
    )
}

export default Card;