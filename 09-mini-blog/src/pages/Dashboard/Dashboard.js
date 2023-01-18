import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

import styles from './Dashboard.module.css'

const Dashboard = () => {

    const { user } = useAuthValue()
    const uid = user.uid

    const posts = []

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Gerencie seus posts</p>
            {posts && posts.length === 0 ? (
                <div className={styles.noPosts}>
                    <p>Não foi encontrado nenhum post</p>
                    <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
                </div>
            ) : (
                <div>Tem post</div>
            )}
        </div>
    )
}

export default Dashboard