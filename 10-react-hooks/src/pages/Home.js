import { useContext } from 'react'

import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'

const Home = () => {

  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <HookUseRef />
      <hr />
    </div>
  )
}

export default Home