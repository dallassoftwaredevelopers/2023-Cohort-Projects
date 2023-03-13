import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Recipe</h1>
        <p>
          You can make 764 Recipes
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Recipe
        </a>

           <body>
             <input type="text" placeholder="Find..."></input>
       </body>
      </header>
    </div>
  );
}

export default App;
