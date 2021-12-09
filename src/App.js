// import logo from './logo.svg';
import headshot from './headshot.jpg'
import './App.css';
import Main from './Main'

export default function App() {
  return (
    <div className="App">
      <header className='App-header'>
      <img id="headshot" src={headshot} alt='Mat with a baby on his head' />
      </header>
      <Main />
    </div>
  );
}

