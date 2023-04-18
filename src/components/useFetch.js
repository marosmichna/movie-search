import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const getFilms = async () => {
        const response = await fetch(url)
        const ourFilms = await response.json()
        setLoading(false)
        setData(ourFilms.Search)
    }
    getFilms()
  }, [url])

  return {data, loading}

}

export default useFetch