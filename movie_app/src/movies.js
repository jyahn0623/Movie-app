import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// 함수형 컴포넌트
function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} />
            <div className="movie_date">
                <h3 className="movie__title" style={{backgroundColor : "red" }}>{title}</h3>
    <ul className="genres">{ genres.map( (genre, i) => { return <li key={i} className="movie__genres">{genre}</li> }) }</ul>
                <h5 className="movie__year">{year}</h5>

                <p class="movie__summary">{summary.slice(0, 140)}...</p> 
            </div>
        </div>
    )
}

// id : number
Movie.protoTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;