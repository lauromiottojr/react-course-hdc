import './EditProfile.css'

const EditProfile = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div id='editProfile'>
            <p className='subtitle'>Adicione uma imagem de perfil e conte mais sobre você...</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" disabled />
                <input type="text" placeholder="Nome" />
                <label>
                    <span>Imagem do perfil:</span>
                    <input type="file" />
                </label>
                <label>
                    <span>Bio:</span>
                    <input type="text" placeholder="Descrição do perfil" />
                </label>
                <label>
                    <span>Alterar senha</span>
                    <input type="password" placeholder="Digite sua nova senha" />
                </label>
                <input type="submit" value="Atualizar" />
            </form>
        </div>
    )
}

export default EditProfile