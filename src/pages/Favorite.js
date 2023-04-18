import "./Favorite.css"

const Favorite = () => {
  
  let localData = JSON.parse(localStorage.getItem("myMovie"))

  const deleteMoviesHandler = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="favorite-container">
      <div className="favorite-head">
        <h1>Your Favorite movies</h1>
        <button onClick={deleteMoviesHandler}>Delete all Favorite Movies</button>
      </div>
      {localData &&
        localData.map((oneFilm) => {
          return (
            <div className="favorite-body">
              <img src={oneFilm.Poster} alt={oneFilm.Title} />
              <div>
                <h3>{oneFilm.Title}</h3>
                <p>{oneFilm.Year}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Favorite