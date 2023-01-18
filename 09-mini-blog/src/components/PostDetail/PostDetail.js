import { Link } from 'react-router-dom'

import styles from './PostDetail.module.css'

const PostDetail = ({ post }) => {
    return (
        <div className={styles.postDetail}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p className={styles.createdBy}>{post.createdBy}</p>
            <div className={styles.tags}>
                {post.tagsArray.map((tag) => (
                    <p key={tag}><span>#{tag}</span></p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className='btn btnOutline'>Ler</Link>
        </div>
    )
}

export default PostDetail