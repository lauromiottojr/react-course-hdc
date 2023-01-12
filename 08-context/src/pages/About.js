/*import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"*/

import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {

  //const { counter, setCounter } = useContext(CounterContext)

  const { counter } = useCounterContext()

  return (
    <div>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default About