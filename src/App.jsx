import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ImageComponent src = "https://www.google.it/url?sa=i&url=https%3A%2F%2Fwww.toptal.com%2Freact%2Freact-context-api&psig=AOvVaw2_gGBw3cKLCuld9TGFRVJX&ust=1680007381951000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjE3auR_P0CFQAAAAAdAAAAABAS" alt="Foto React"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <ButtonComponent id = "button" content = "Invia"/>
      </header>
    </div>
  );
}

export default App;
