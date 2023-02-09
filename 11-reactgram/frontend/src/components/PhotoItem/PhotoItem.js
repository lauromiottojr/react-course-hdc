import { upload } from '../../utils/config'

import { Link } from 'react-router-dom'

import './PhotoItem.css'

const PhotoItem = ({ photo }) => {
    return (
        <div className='photoItem'>
            {photo.image && (
                <img src={`${upload}/photos/${photo.image}`} alt={photo.title} />
            )}
            <h2>{photo.title}</h2>
            <p className='photoAuthor'>
                Publicada por: <Link to={`/users/${photo.userId}`}>{photo.userName}</Link>
            </p>
        </div>
    )
}

export default PhotoItem