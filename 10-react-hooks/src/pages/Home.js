import { useContext } from 'react'

import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import { SomeContext } from '../components/HookUseContext'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'
import HookUseLayoutEffect from '../components/HookUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HooksCustom from '../components/HooksCustom'

const Home = () => {

  const { contextValue } = useContext(SomeContext)

  return (
    <div>
      <HooksCustom />
      <hr />
    </div>
  )
}

export default Home