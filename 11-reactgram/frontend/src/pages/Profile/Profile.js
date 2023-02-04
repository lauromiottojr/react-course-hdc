import { upload } from '../../utils/config'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getUserDetails } from '../../slices/userSlice'
import { publishPhoto, resetMessage, getUserPhotos } from '../../slices/photoSlice'

import { BsFillEyeFill, BsPencilFill, BsXLg } from 'react-icons/bs'

import Message from '../../components/Message/Message'

import './Profile.css'

const Profile = () => {

    const { id } = useParams()
    const dispatch = useDispatch()

    const { user, loading } = useSelector((state) => state.user)
    const { user: userAuth } = useSelector((state) => state.auth)

    const { photos, loading: loadingPhoto, message: messagePhoto, error: errorPhoto } = useSelector(
        (state) => state.photo
    )

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")

    const newPhotoForm = useRef()
    const editPhotoForm = useRef()

    // load user data
    useEffect(() => {
        dispatch(getUserDetails(id))
        dispatch(getUserPhotos(id))
    }, [dispatch, id])

    if (loading) {
        return <p>Carregando...</p>
    }

    const handleFile = (e) => {
        const image = e.target.files[0]
        setImage(image)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const photoData = {
            title,
            image,
        }
        // build form data
        const formData = new FormData()
        const photoFormData = Object.keys(photoData).forEach((key) => formData.append(key, photoData[key]))
        formData.append("photo", photoFormData)
        dispatch(publishPhoto(formData))
        setTitle("")
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000);
    }

    return (
        <div id='profile'>
            <div className='profileHeader'>
                {user.profileImage && (
                    <img src={`${upload}/users/${user.profileImage}`} alt={user.name} />
                )}
                <div className='profileDescription'>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                </div>
            </div>
            {id === userAuth._id && (
                <>
                    <div className='newPhoto' ref={newPhotoForm}>
                        <h3>Compartilhe algum momento seu:</h3>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <span>Título para a foto:</span>
                                <input type="text" placeholder='Insira um título'
                                    onChange={(e) => setTitle(e.target.value)} value={title || ''} />
                            </label>
                            <label>
                                <span>Imagem:</span>
                                <input type="file" onChange={handleFile} />
                            </label>
                            <label>
                                {!loadingPhoto && <input type="submit" value='Postar' />}
                                {loadingPhoto && <input type="submit" value='Carregando...' disabled />}
                            </label>
                        </form>
                    </div>
                    {errorPhoto && <Message msg={errorPhoto} type="error" />}
                    {messagePhoto && <Message msg={messagePhoto} type="success" />}
                </>
            )}
            <div className='userPhotos'>
                <h2>Fotos publicadas</h2>
                <div className='photosContainer'>
                    {photos && photos.map((photo) => (
                        <div className='photo' key={photo.id}>
                            {photo.image && (<img src={`${upload}/photos/${photo.image}`}
                                alt={photo.title} />)}
                            {id === userAuth._id ?
                                (<div className='actions'>
                                    <Link to={`/photos/${photo._id}`}>
                                        <BsFillEyeFill />
                                    </Link>
                                    <BsPencilFill />
                                    <BsXLg />
                                </div>) :
                                (<Link className="btn" to={`/photos/${photo._id}`}>Ver</Link>)}
                        </div>
                    ))}
                    {photos.length === 0 && <p>Ainda não há fotos publicadas!</p>}
                </div>
            </div>
        </div>
    )
}

export default Profile