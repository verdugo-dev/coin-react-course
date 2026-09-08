const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-950 text-white border-b border-blue-900">
      <div className="font-crypto text-xl font-bold">
        <span className="text-blue-400">Crypto</span><span className="text-white">App</span>
      </div>
      <nav className="flex gap-6">
        <a href="#" className="text-gray-300 hover:text-white">Overview</a>
        <a href="#" className="text-gray-300 hover:text-white">Watchlist</a>
      </nav>
    </header>
  )
}

export default Header