import { upload } from '../../utils/config'

import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useResetComponentMessage } from '../../hooks/useResetComponentMessage'

import { getPhoto, like } from '../../slices/photoSlice'

import Message from '../../components/Message/Message'

import PhotoItem from '../../components/PhotoItem/PhotoItem'

import './Photo.css'
import Like from '../../components/Like/Like'

const Photo = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { photo, loading, error, message } = useSelector((state) => state.photo)

    const resetMessage = useResetComponentMessage(dispatch)

    // load photo data
    useEffect(() => {
        dispatch(getPhoto(id))
    }, [dispatch, id])

    const handleLike = () => {
        dispatch(like(photo._id))
        resetMessage()
    }

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div id='photo'>
            <PhotoItem photo={photo} />
            <Like photo={photo} user={user} handleLike={handleLike} />
            <div className='messageContainer'>
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
            </div>
        </div>
    )
}

export default Photo