import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Contact from './components/Contact';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
