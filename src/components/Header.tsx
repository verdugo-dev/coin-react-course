import { Link } from "react-router-dom"
import { useFavoritesStore } from "../store/favoritesStore";

const Header = () => {

    const {countFavorites} = useFavoritesStore();

  return (
    <header className="flex justify-between items-center p-4 bg-blue-950 text-white border-b border-blue-900">
      <div className="font-crypto text-xl font-bold">
        <Link to="">
          <span className="text-blue-400">Crypto</span><span className="text-white">App</span>
        </Link>
      </div>
      <nav className="flex gap-6">
        <Link to="/overview" className="text-gray-300 hover:text-white">Overview</Link>
        <Link to="/watchList" className="text-gray-300 hover:text-white">Favorites ({countFavorites()})</Link>
      </nav>
    </header>
  )
}

export default Header