import './App.css'

import logo from "../src/assets/react.svg"

function App() {
  const currentPath = window.location.href;
  return (
    <main>
      <div className="">
        <img src={logo} alt="logo" className='logo' />
      </div>
      <div className="container">
        <div className="inner-container">
          <h2 className="header">
            You’ve just ignited a new <span className="library">React</span> static site!
          </h2>
          <a
            href={currentPath}
            target='_blank'
            className="pathname"
          >
            {currentPath}
          </a>
        </div>
        <p className="footer">
          Made in Nigeria with 💖
        </p>
      </div>
    </main>
  )
}

export default App

