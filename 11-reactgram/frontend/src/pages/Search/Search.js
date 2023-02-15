import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"
import { useQuery } from "../../hooks/useQuery"

import { searchPhotos, like } from '../../slices/photoSlice'

import Like from '../../components/Like/Like'
import PhotoItem from '../../components/PhotoItem/PhotoItem'

import './Search.css'

const Search = () => {

    const query = useQuery()
    const search = query.get("query")

    const dispatch = useDispatch()
    const resetMessage = useResetComponentMessage(dispatch)


    const { user } = useSelector((state) => state.auth)
    const { photos, loading } = useSelector((state) => state.photo)

    // load photos 
    useEffect(() => {
        dispatch(searchPhotos(search))
    }, [dispatch, search])

    // like a photo
    const handleLike = (photo) => {
        dispatch(like(photo._id))
    }

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div id='search'>
            <h2>Você está buscando por: {search}</h2>
            {photos && photos.map((photo) => (
                <div key={photo._id}>
                    <PhotoItem photo={photo} />
                    <Like photo={photo} user={user} handleLike={handleLike} />
                    <Link className='btn' to={`/photos/${photo._id}`}>Ver mais</Link>
                </div>
            ))}
            {photos && photos.length === 0 && (
                <h2 className='noPhotos'>Não foram encontrados resultados para sua busca!</h2>
            )}
        </div>
    )
}

export default Search