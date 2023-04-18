import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Detail.css"

const Detail = () => {
  let addFavorite = []
  const { movieId } = useParams()

  const apiUrl = `https://omdbapi.com/?apikey=57646235&i=${movieId}`

  const [movieData, setMovieData] = useState(null)
  const [hiddenButton, setHiddenButton] = useState(false)

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setMovieData(data))
      .catch(error => console.log(error))
  }, [apiUrl])

  const addToFavorite = () => {
    const lokal = JSON.parse(localStorage.getItem("myMovie"))
    if (lokal) {
      addFavorite = lokal
    }
    addFavorite.push(movieData)
    addFavorite = JSON.stringify(addFavorite)
    localStorage.setItem("myMovie", addFavorite)
    setHiddenButton(true)
  }

  return (
    <div className="detail-container">
      {movieData ? (
        <div>
          <div className="detail-head">
            <h3>{movieData.Title}</h3>
            {!hiddenButton && <button onClick={addToFavorite}>Add to favorite</button>}
          </div>
          <div className="detail-body">
            <img src={movieData.Poster} alt={movieData.Title} />
            <div className="detail-description">
              <div className="detail-description">
                <div className="detail-description-layout">
                    <p>Actors:</p>
                    <p>{movieData.Actors}</p>
                </div>
                <div className="detail-description-layout">
                    <p>Awards:</p>
                    <p>{movieData.Awards}</p>
                </div>
                <div className="detail-description-layout">
                    <p>BoxOffice:</p>
                    <p>{movieData.BoxOffice}</p>
                </div>
                <div className="detail-description-layout">
                    <p>Country:</p>
                    <p>{movieData.Country}</p>
                </div>
                <div className="detail-description-layout">
                    <p>DVD: </p>
                    <p>{movieData.DVD}</p>
                </div>
                <div className="detail-description-layout">
                    <p>Director:</p>
                    <p>{movieData.Director}</p>
                </div>
                <div className="detail-description-layout">
                    <p>Genre:</p>
                    <p>{movieData.Genre}</p>
                </div>
                <div className="detail-description-layout">
                    <p>Language:</p>
                    <p>{movieData.Language}</p>
                </div>
                <div className="detail-description-layout">
                    <p>Metascore:</p>
                    <p>{movieData.Metascore}</p>
                </div>
                <div className="detail-description-layout">
                  <p>Plot:</p>
                  <p>{movieData.Plot}</p>
                </div>
                <div className="detail-description-layout">
                  <p>Released:</p>
                  <p>{movieData.Released}</p>
                </div>
                <div className="detail-description-layout">
                  <p>Runtime:</p>
                  <p>{movieData.Runtime}</p>
                </div>
                <div className="detail-description-layout">
                  <p>Type:</p>
                  <p>{movieData.Type}</p>
                </div>
                <div className="detail-description-layout">
                  <p>IMDB Rating:</p>
                  <p>{movieData.imdbRating}</p>
                </div>
                <div className="detail-description-layout">
                  <p>IMDB Votes:</p>
                  <p>{movieData.imdbVotes}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Detail