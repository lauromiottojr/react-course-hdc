import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'

import './App.css';

const url = 'http://localhost:3000/products';

function App() {

  // custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")


  // getting datas from api

  /*useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json(); // transform res to JSON 
      setProducts(data);
    }
    fetchData();
  }, []);*/

  // adding products
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product = {
      name,
      price
    }
    /*const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(products),
    });
    // dynamic loading
    const addedProduct = await res.json()

    setProducts((prevProducts) => [
      ...prevProducts,
      addedProduct
    ])*/
    httpConfig(product, "POST")
    setName("")
    setPrice("")
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error &&
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      }
      <div className='addProduct'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label htmlFor='price'>Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {loading && <input type="submit" disabled value="Aguarde..." />}
          {!loading && <input type="submit" value="Criar produto" />}
        </form>
      </div>
    </div>
  );
}

export default App;
