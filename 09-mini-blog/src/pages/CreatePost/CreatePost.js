import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthentication } from '../../hooks/useAuthentication'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useAuthValue } from '../../context/AuthContext'

import styles from './CreatePost.module.css'

const CreatePost = () => {

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    const { insertDocument, response } = useInsertDocument("posts")

    const navigate = useNavigate()

    const { user } = useAuthValue()

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormError("")

        try {
            new URL(image)
        } catch (error) {
            setFormError("A imagem precisa ser uma URL!")
            return;
        }

        // split -> divide each word
        // trim -> remove blank spaces
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

        if (!title || !image || !body || !tags) {
            setFormError("Por favor, preencha todos os campos!")
            return;
        }

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })
        navigate("/")
    }

    return (
        <div className={styles.createPost}>
            <h2>Criar post</h2>
            <p>Escreva o que quiser e compartilhe seu conhecimento</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input type="text" name='title' required placeholder='Pense em um bom título'
                        value={title} onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input type="text" name='image' required placeholder='Insira uma imagem para seu post'
                        value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea name='body' required placeholder='Insira o conteúdo do post'
                        value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input type="text" name='tags' required placeholder='Insira as tags separadas por vírgula'
                        value={tags} onChange={(e) => setTags(e.target.value)} />
                </label>
                {!response.loading && <button className="btn">Criar post</button>}
                {response.loading && <button className="btn" disabled>Aguarde...</button>}
                {response.error && <p className='error'>{response.error}</p>}
                {formError && <p className='error'>{formError}</p>}
            </form>
        </div>
    )
}

export default CreatePost