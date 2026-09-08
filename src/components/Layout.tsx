import Header from './Header'
import { CoinsContainer } from './CoinsContainer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <h1 className="text-center py-4">Lista de Criptomonedas</h1>
      <Outlet></Outlet>
    </>
  )
}
