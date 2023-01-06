import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "josé", email: "jose@jose.com", bio: "loucura", role: "adm" }} />
    </div>
  );
}

export default App;
