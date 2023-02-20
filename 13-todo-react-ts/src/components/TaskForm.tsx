import { useState, ChangeEvent, FormEvent, useEffect } from 'react'

import { ITask } from '../interfaces/Task'

import styles from './TaskForm.module.css'

type Props = {
    btnText: string,
}

const TaskForm = ({ btnText }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [difficult, setDifficult] = useState<number>(0)

    const addTaskHandler = () => {

    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "title") {
            setTitle(e.target.value)
        } else if (e.target.name === "difficult") {
            setDifficult(parseInt(e.target.value))
        }
    }

    return (
        <form onSubmit={addTaskHandler} className={styles.form}>
            <div className={styles.inputContainer}>
                <label htmlFor="title">Título:</label>
                <input type="text" name="title" placeholder="Título da tarefa"
                    onChange={handleChange} />
            </div>
            <div className={styles.inputContainer}>
                <label htmlFor="difficult">Dificuldade:</label>
                <input type="number" name="difficult" placeholder="Dificuldade da tarefa"
                    onChange={handleChange} />
            </div>
            <input type="submit" value={btnText} />
            <p>{title}</p>
            <p>{difficult}</p>
        </form>
    )
}

export default TaskForm