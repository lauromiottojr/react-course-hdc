/*import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"*/

import { useCounterContext } from "../hooks/useCounterContext"


import { useTitleColorContext } from '../hooks/useTitleColorContext'

const About = () => {

  //const { counter, setCounter } = useContext(CounterContext)

  const { counter } = useCounterContext()

  const { color, dispatch } = useTitleColorContext()

  return (
    <div>
      <p style={{backgroundColor: color}}>Valor do contador: {counter}</p>
    </div>
  )
}

export default About