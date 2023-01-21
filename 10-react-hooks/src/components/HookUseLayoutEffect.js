import { useLayoutEffect, useEffect, useState } from 'react'

const HookUseLayoutEffect = () => {

  const [name, setName] = useState("Lauro")

  useEffect(() => {
    console.log('2');
    setName("Mudou o nome")
  }, [])

  // a diferenca entre useLayoutEffect e useEffect é que o primeiro será executado antes 
  // do carregamento do componente
  useLayoutEffect(() => {
    console.log('1');
    setName('Outro nome')
  }, [])

  console.log(name);

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  )
}

export default HookUseLayoutEffect