import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'

import styles from './Post.module.css'

const Post = () => {

    const { id } = useParams()
    const { document: post, loading } = useFetchDocument("posts", id)

    return (
        <div className={styles.postContainer}>
            {loading && <p>Carregando post...</p>}
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <h3>Este post trata-se sobre:</h3>
                    {post.tagsArray.map((tag) => (
                        <div className={styles.tags}>
                            <p key={tag}><span>#{tag}</span></p>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Post