import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/Layout"
import { CoinsContainer } from "./components/CoinsContainer"
import { NotFound } from "./components/NotFound"
import { WatchListContainer } from "./components/WatchList"
import { CoinContainer } from "./components/CoinContainer"
import { FavoritesProvider } from "./context/FavoritesProvider"

function App() {
  return (
    // <FavoritesProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={ <Layout/> }>
    //         <Route index element={ <CoinsContainer/> } />
    //         <Route path="watchList" element={<WatchListContainer/>}/>
    //         <Route path="coin/:id" element={<CoinContainer/>} />
    //         <Route path="*" element={ <NotFound/>} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <CoinsContainer/> } />
            <Route path="watchList" element={<WatchListContainer/>}/>
            <Route path="coin/:id" element={<CoinContainer/>} />
            <Route path="*" element={ <NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
