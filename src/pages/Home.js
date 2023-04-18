import useFetch from "../components/useFetch"
import { useState } from "react"
import ReactPaginate from "react-paginate"
import { useNavigate } from "react-router-dom"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import "./Home.css"

const Home = () => {

  const [searchingText, setSearchingText] = useState("")
  const [pageSelected, setPageSelected] = useState(1)
  const detailNavigate = useNavigate()

  const apiUrl = `https://omdbapi.com/?s=${searchingText}&page=${pageSelected}&apikey=57646235`

  const {data} = useFetch(apiUrl)

  const pageHandler = (pageData) => {
    setPageSelected(pageData.selected + 1)
  }

  console.log(data)
  return (
    <div className="home-container">
      <div className="home-header">
        <h3>Find your movie</h3>
        <input
          type="text"
          placeholder="Movie name"
          onChange={(e) => {setSearchingText(e.target.value)}}
        />
      </div>
      <table >
        <tbody>
          {
            data ? data.map((oneMovie) => {
              const {imdbID, Poster, Title, Year} = oneMovie
              return(
                <tr 
                  key={imdbID}
                  className="home-body"
                  onClick={() => {
                    detailNavigate(`/movie/${imdbID}`)
                  }}
                >
                  <td>
                     <img 
                      src={Poster} 
                      alt={Title} 
                      className="home-img"
                    />
                  </td>
                  <td className="home-description">
                    <p>{Title}</p>
                    <p>{Year}</p>
                  </td>
                </tr>
              )
            })
            : <tr><td  className="home-nodata">"No data"</td></tr>
          }     
         </tbody>
      </table>
      <div>
        {
          data && 
          <ReactPaginate
          pageCount={100}
          onPageChange={pageHandler}
          previousLabel={<GrFormPrevious className="home-previousLabel"/>}
          nextLabel={<GrFormNext className="home-nextLabel" />}
          className="home-paginate"
          pageClassName="home-paginate-page"
        />
        } 
      </div>
    </div>
  )
}

export default Home