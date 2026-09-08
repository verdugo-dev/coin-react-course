const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="text-xl font-bold">CryptoApp</div>
      <nav className="flex gap-6">
        <a href="#" className="hover:text-gray-500">Overview</a>
        <a href="#" className="hover:text-gray-500">Watchlist</a>
      </nav>
    </header>
  )
}

export default Header
