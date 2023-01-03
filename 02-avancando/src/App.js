import { useState } from 'react';

import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

import './App.css';

import City from './assets/city.jpg'
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UserDetails from './components/UserDetails';

function App() {

  const showMessage = () => {
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState()

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <img src={City} alt="Cidade" />
      <img src="/img/img1.jpg" alt="Paisagem" />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name='lauro' />
      <CarDetails brand="VW" km={1000} collor="Azul" />
      <Fragment />
      <Container myValue='teste'>
        <p>E este é o conteúdo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message message={message} />
      <ChangeMessage handleMessage={handleMessage} />
      <UserDetails/>
    </div>
  );
}

export default App;
