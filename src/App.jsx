import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import NotFound from './pages/NotFound';
import Header from './pages/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/other" element={<OtherPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
