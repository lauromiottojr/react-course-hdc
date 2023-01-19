import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useUpdateDocument } from '../../hooks/useUpdateDocument'
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocument } from '../../hooks/useFetchDocument'

import styles from './EditPost.module.css'

const EditPost = () => {

    const { id } = useParams()
    const { document: post } = useFetchDocument("posts", id)

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [tags, setTags] = useState([])
    const [formError, setFormError] = useState("")

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setBody(post.body)
            setImage(post.image)
            const textTags = post.tagsArray.join(", ")
            setTags(textTags)
        }
    }, [post])

    const { updateDocument, response } = useUpdateDocument("posts")

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

        const data = {
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        }

        updateDocument(id, data)

        navigate("/dashboard")
    }

    return (
        <div className={styles.editPost}>
            {post && (
                <>
                    <h2>Editando post: {post.title}</h2>
                    <p>Altere os dados do post como desejar</p>
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
                        <p className={styles.previewTitle}>Preview da imagem atual:</p>
                        <img src={post.image} alt={post.title} className={styles.imagePreview} />
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
                        {!response.loading && <button className="btn">Editar</button>}
                        {response.loading && <button className="btn" disabled>Aguarde...</button>}
                        {response.error && <p className='error'>{response.error}</p>}
                        {formError && <p className='error'>{formError}</p>}
                    </form>
                </>
            )}
        </div>
    )
}

export default EditPost