import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Error from './pages/Error_404';
import Home from './pages/Home';

function App() {

  return (
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
