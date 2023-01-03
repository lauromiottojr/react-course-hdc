const CarDetails = ({brand, km, collor}) => {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {collor}</li>
        </ul>
    </div>
  )
}

export default CarDetails