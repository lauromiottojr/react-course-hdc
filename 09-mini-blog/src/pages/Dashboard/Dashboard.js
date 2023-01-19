import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

import styles from './Dashboard.module.css'

const Dashboard = () => {

    const { user } = useAuthValue()
    const uid = user.uid

    const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

    const deleteDocument = (id) => {

    }

    if (loading) {
        return (<p>Carregando...</p>)
    }

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
                <>
                    <div>
                        <span>Título</span>
                        <span>Ações</span>
                    </div>
                    {posts && posts.map((post) => (
                        <div key={post.id}>
                            <p>{post.title}</p>
                            <div>
                                <Link to={`/posts/${post.id}`}
                                    className='btn btnOutline'>Ver</Link>
                                <Link to={`/posts/edit/${post.id}`}
                                    className='btn btnOutline'>Editar</Link>
                                <button onClick={() => deleteDocument(post.id)}
                                    className='btn btnOutline btnDanger'>Excluir</button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Dashboard