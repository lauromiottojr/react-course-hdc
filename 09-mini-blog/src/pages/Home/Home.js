import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import styles from './Home.module.css'

const Home = () => {

    const [query, setQuery] = useState("")
    const [posts] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.home}>
            <h1>Veja nossos posts mais recentes</h1>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <input type="text" placeholder='Ou busque por tags...'
                    onChange={(e) => setQuery(e.target.value)} />
                <button className='btn btnDark'>Pesquisar</button>
            </form>
            <div>
                <h1>Posts...</h1>
                {posts && posts.length === 0 && (
                    <div className={styles.noPosts}>
                        <p>Não foram encontrados posts!</p>
                        <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home