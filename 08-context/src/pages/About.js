import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

const About = () => {

  const { counter, setCounter } = useContext(CounterContext)

  return (
    <div>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About