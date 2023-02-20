function App() {

  const name: String = "Lauro"
  const age: number = 30
  const isWorking: Boolean = true

  const userGreeting = (name: String): String => {
    return `Olá, ${name}!`
  }

  return (
    <div className="App">
      <h1>TypeScript + React</h1>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>{name}{isWorking ? (<span> está</span>) : (<span> não está</span>)} trabalhando!</p>
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
