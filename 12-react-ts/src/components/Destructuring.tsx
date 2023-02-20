type Props = {
    title: String,
    content: String,
    commentQtd: number,
    tags: String[],
    category: Category,
}

export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    J = "Java",
}

const Destructuring = ({ title, content, commentQtd, tags, category }: Props) => {
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
            <h4>Categoria: {category}</h4>
        </div>
    )
}

export default Destructuring