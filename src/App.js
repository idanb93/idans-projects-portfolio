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
        <Routes>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

      <div id='intro'>
        <h2 style={{ color: 'whitesmoke' }}>Hi My name is Idan Bardugo and I am an experienced Full-Stack Developer</h2>
        <div id='intro-picture-container'>
          <img id='intro-picture' src={require('./img/idan.png')} />
        </div>
      </div>

      <div id='about-me'>

        <div id='about-me-title'>
          <h2>Hi, I'm Idan</h2>
        </div>

        <div id='about-me-body'>
          <p>In the past 2 years i worked at Cato Networks I'm passionate about cyber security</p>
        </div>

      </div>

      <div id='cards-conatiner'>
        <div id='cards'>

          <div className='card'>
            <div className='card-icon'></div>
            <div className='card-title'>
              <h2>Front-End Developer</h2></div>
            <div className='card-body'>
              <p>Building user interfaces from scratch.
                Using various state management like Redux, Vuex, Mobx.
                Experience in building complex UI systems with huge scale of data.</p>
            </div>
            <div className='card-technologies'>
              <h4>Front-end Frameworks and Tools:</h4>
                <li className='tool'>React.js</li>
                <li className='tool'>Redux</li>
                <li className='tool'>Bootstrap</li>
                <li className='tool'>Matrial UI</li>
            </div>
          </div>

          <div className='card'>
            <div className='card-icon'></div>
            <div className='card-title'>
              <h2>Back-End Developer</h2></div>
            <div className='card-body'>
                <li className='tool'>Building user interfaces from scratch.</li>
                <li className='tool'> Using various state management like Redux, Vuex, Mobx.</li>
                <li className='tool'> Experience in building complex UI systems with huge scale of data.</li>
            </div>
            <div className='card-technologies'>
              <h4>Front-end Frameworks and Tools:</h4>
                <li className='tool'>Node.js</li>
                <li className='tool'>Express.js</li>
                <li className='tool'>Express Router</li>
                <li className='tool'>JWT</li>
                <li className='tool'>Python</li>
                <li className='tool'>Sub-Processes</li>
                <li className='tool'>Java</li>
                <li className='tool'>Multi-Threaded Programming</li>
            </div>
          </div>

          <div className='card'>
            <div className='card-icon'></div>
            <div className='card-title'>
              <h2>Cloud</h2></div>
            <div className='card-body'>
              <p>Building user interfaces from scratch.
                Using various state management like Redux, Vuex, Mobx.
                Experience in building complex UI systems with huge scale of data.</p>
            </div>
            <div className='card-technologies'>
              <h4>Front-end Frameworks and Tools:</h4>
                <li className='tool'>React.js</li>
                <li className='tool'>Redux</li>
                <li className='tool'>Bootstrap</li>
                <li className='tool'>Matrial UI</li>
            </div>
          </div>

        </div>

      </div>

      <div id='projects'>
        <p>Here are some of my projects</p>
        <div id='projects-container'>
          <div className='project'>
            <a href="https://www.loom.com/embed/f7294c49890e492a86f51121d3ad4b85">
              <img className='project-image' src="https://cdn.loom.com/sessions/thumbnails/f7294c49890e492a86f51121d3ad4b85-with-play.gif" />
            </a>

          </div>
          <div className='project'></div>
          <div className='project'></div>
          <div className='project'></div>
          <div className='project'></div>
          <div className='project'></div>
        </div>
      </div>

      <footer>
        <div><p style={{color: 'whitesmoke'}}>With Great Power Comes Great Responsibility</p></div>
        <div id='footer-button-container'>
          <button className='footer-button'>Github</button>
          <button className='footer-button'>Linkedin</button>
          <button className='footer-button'>Email</button>
        </div>
      </footer>

    </div>
  );
}

export default App;
