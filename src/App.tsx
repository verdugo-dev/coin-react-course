import { useRef, useState } from 'react'
import Coin from './components/Coin'
import { coins } from './data/coins'
import type { CoinInterface } from './interface/Coint';

function App() {

  const [coinsList, setCoinsList] = useState<CoinInterface[]>(coins);
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const searchValue = searchInput.current?.value || '';
    const newCoinList = coins.filter(coin => coin.name.toLowerCase().includes(searchValue.toLowerCase()));
    setCoinsList(newCoinList);
  }

  return (
    <>
      <h1>Lista de Criptomonedas</h1>

      <input type="text" placeholder='Buscar Criptomoneda' ref={searchInput} onChange={handleSearch}/>

      <div className='coins-list'>
        {
          coinsList.map(coin => (
            <Coin key={coin.order} {...coin} />
          ))
        }
      </div>
    </>
  )
}

export default App
