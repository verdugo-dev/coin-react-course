import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { CoinsContainer } from "./components/CoinsContainer"
import { NotFound } from "./components/NotFound"
import { WatchListContainer } from "./components/WatchList"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <CoinsContainer/> } />
          <Route path="watchList" element={<WatchListContainer/>}/>
          <Route path="coin/:id" element={<WatchListContainer/>} />
          <Route path="*" element={ <NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
