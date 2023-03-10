import { createContext } from 'react'

import Destructuring, { Category } from "./components/Destructuring"
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"
import State from "./components/State"
import Context from './components/Context'

type textOrNull = string | null

interface IAppContext {
  language: String,
  framework: String,
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {

  const name: String = "Lauro"
  const age: number = 30
  const isWorking: Boolean = true

  const userGreeting = (name: String): String => {
    return `Olá, ${name}!`
  }

  const myText: textOrNull = "Tem texto aqui!"
  let myOtherText: textOrNull = null

  const contextValue: IAppContext = {
    language: "JS",
    framework: "react",
  }


  return (
    <AppContext.Provider value={contextValue}>
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
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
