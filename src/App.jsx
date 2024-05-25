import './App.css'
import { Routes, Route } from 'react-router'
import Auth from './pages/auth/AuthPage';
import Layout from './components/Layout';
import CrudPortFolio from './pages/crud_portfolio/CrudPortfolio';

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Auth />}></Route>
        <Route path='/maker' element={<CrudPortFolio />}></Route>
      </Route>
    </Routes>
  )
}

export default App
