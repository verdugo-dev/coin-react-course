import Header from './components/Header'
import { CoinstTable } from './components/CoinstTable';

function App() {
  return (
    <>
      <Header />
      <h1 className="text-center py-4">Lista de Criptomonedas</h1>
      <CoinstTable/>
    </>
  )
}

export default App
