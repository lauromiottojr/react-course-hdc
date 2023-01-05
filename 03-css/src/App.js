import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15;

  const redTitle = false;

  return (
    <div className="App">
      <h1>React com css</h1>
      <MyComponent />
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>

      <p style={n > 10 ? { backgroundColor: "purple" } : { backgroundColor: "orange" }}>
        CSS dinamico
      </p>
      <h2 className={redTitle ? "redTitle" : "title"}>
        Esse título terá classe dinamica
      </h2>
      <Title />
    </div>
  );
}

export default App;
