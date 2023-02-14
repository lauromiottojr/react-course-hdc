import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage"

import { getPhotos, like } from '../../slices/photoSlice'

import Like from '../../components/Like/Like'
import PhotoItem from '../../components/PhotoItem/PhotoItem'

import './Home.css'

const Home = () => {

  const dispatch = useDispatch()
  const resetMessage = useResetComponentMessage(dispatch)

  const { user } = useSelector((state) => state.auth)
  const { photos, loading } = useSelector((state) => state.photo)

  // load all photos
  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  // like a photo
  const handleLike = (photo) => {
    dispatch(like(photo._id))
  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div id='home'>
      {photos && photos.map((photo) => (
        <div key={photo._id}>
          <PhotoItem photo={photo} />
          <Like photo={photo} user={user} handleLike={handleLike} />
          <Link className='btn' to={`/photos/${photo._id}`}>Ver mais</Link>
        </div>
      ))}
      {photos && photos.length === 0 && (
        <h2 className='noPhotos'>Ainda não há fotos publicadas,
          <Link to={`/users/${user._id}`}> clique aqui e seja o primeiro a publicar!</Link></h2>
      )}
    </div>
  )
}

export default Home