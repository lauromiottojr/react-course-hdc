import { useParams } from "react-router-dom"

const Product = () => {

    const { id } = useParams() // get params from url

    return (
        <>
            <p>ID do produto: {id}</p>
        </>
    )
}

export default Product