import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { resetMessage, profile } from '../../slices/userSlice'

import Message from '../../components/Message/Message'

import { upload } from '../../utils/config'

import './EditProfile.css'

const EditProfile = () => {

    const dispatch = useDispatch()

    const { user, message, error, loading } = useSelector((state) => state.user)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageProfile, setImageProfile] = useState("")
    const [bio, setBio] = useState("")
    const [previewImage, setPreviewImage] = useState("")

    // states

    // load user data
    useEffect(() => {
        dispatch(profile())
    }, [dispatch])

    // fill form with user data
    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setBio(user.bio)
        }
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id='editProfile'>
            <p className='subtitle'>Adicione uma imagem de perfil e conte mais sobre você...</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome"
                    onChange={(e) => setName(e.target.value)} value={name || ""} />
                <input type="email" placeholder="Email" disabled
                    value={email || ""} />
                <label>
                    <span>Imagem do perfil:</span>
                    <input type="file" />
                </label>
                <label>
                    <span>Bio:</span>
                    <input type="text" placeholder="Descrição do perfil"
                        onChange={(e) => setBio(e.target.value)} value={bio || ""} />
                </label>
                <label>
                    <span>Alterar senha</span>
                    <input type="password" placeholder="Digite sua nova senha"
                        onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                </label>
                <input type="submit" value="Atualizar" />
            </form>
        </div>
    )
}

export default EditProfile