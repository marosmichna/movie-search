import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Detail"
import Favorite from "./pages/Favorite"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movie/:movieId" element={<Details />} />
          <Route path="my-favorites" element={<Favorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App