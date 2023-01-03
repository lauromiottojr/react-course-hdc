import City from './assets/city.jpg'

import './App.css';
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <img src={City} alt="Cidade" />
      <img src="/img/img1.jpg" alt="Paisagem" />
      <ManageData />
    </div>
  );
}

export default App;
