import Destructuring, { Category } from "./components/Destructuring"
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"
import State from "./components/State"

type textOrNull = string | null

function App() {

  const name: String = "Lauro"
  const age: number = 30
  const isWorking: Boolean = true

  const userGreeting = (name: String): String => {
    return `Olá, ${name}!`
  }

  const myText: textOrNull = "Tem texto aqui!"
  let myOtherText: textOrNull = null

  return (
    <div className="App">
      <h1>TypeScript + React</h1>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>{name}{isWorking ? (<span> está</span>) : (<span> não está</span>)} trabalhando!</p>
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name={name} />
      <Destructuring title="Meu post" commentQtd={50} content="Algum conteúdo!"
        tags={["vapo", "cepo de madeira"]} category={Category.J} />
      <State />
    </div>
  );
}

export default App;
