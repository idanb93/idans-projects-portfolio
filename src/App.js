import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <header className="App-header">
          <Routes>
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </header>

      </BrowserRouter>

      <div id='intro'>
        <div>
          <h2 style={{ color: 'white' }}>Hi My name is Idan Bardugo and I am an experienced Full-Stack Developer</h2>
        </div>
      </div>

    </div>
  );
}

export default App;
