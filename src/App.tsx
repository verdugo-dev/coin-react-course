import Header from './components/Header'
import { CoinsContainer } from './components/CoinsContainer';

function App() {
  return (
    <>
      <Header />
      <h1 className="text-center py-4">Lista de Criptomonedas</h1>
      <CoinsContainer/>
    </>
  )
}

export default App
