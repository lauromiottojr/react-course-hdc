function App() {

  const name: String = "Lauro"
  const age: number = 30
  const isWorking: Boolean = true

  return (
    <div className="App">
      <h1>TypeScript + React</h1>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>{name}{isWorking ? (<span> está</span>) : (<span> não está</span>)} trabalhando!</p>
    </div>
  );
}

export default App;
