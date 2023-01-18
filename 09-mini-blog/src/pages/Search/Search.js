import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link } from 'react-router-dom'

import PostDetail from '../../components/PostDetail/PostDetail'

import { useQuery } from '../../hooks/useQuery'

import styles from './Search.module.css'

const Search = () => {

    const query = useQuery()
    // method get is a URLSearchParams method that will get the string "query"
    const search = query.get("query")

    const { documents: posts } = useFetchDocuments("posts", search)

    return (
        <div className={styles.searchContainer}>
            <h2>Search</h2>
            <div>
                {posts && posts.length === 0 && (
                    <div className={styles.noPosts}>
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className='btn btnDark'>Voltar</Link>
                    </div>
                )}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Search