import { useState } from 'react'

import styles from './Cars.module.css'

const Cars = () => {

    const [cars] = useState([
        {
            name: "VW",
            km: 10,
            age: 2010
        },
        {
            name: "Ford",
            km: 7892,
            age: 46
        },
        {
            name: "Gol",
            km: 1000,
            age: 2510
        }
    ])

    return (
        <div>{cars.map((car) => (
            <div className={styles.card}>
                <h1>{car.name}</h1>
                <p>KM: {car.km}</p>
                <p>Ano: {car.age}</p>
            </div>
        ))}</div>
    )
}

export default Cars