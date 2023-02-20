import React from 'react'

type Props = {
    title: String,
    content: String,
    commentQtd: number,
    tags: String[],
}

const Destructuring = ({ title, content, commentQtd, tags }: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <h2>{content}</h2>
            <h2>Quantidade de comentários: {commentQtd}</h2>
            <div>
                {tags.map((tag) => (
                    <span>#{tag} </span>
                ))}
            </div>
        </div>
    )
}

export default Destructuring