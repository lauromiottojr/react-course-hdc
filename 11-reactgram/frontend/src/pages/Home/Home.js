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
  const resetMessage = useResetComponentMessage()

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
    <div>Home</div>
  )
}

export default Home