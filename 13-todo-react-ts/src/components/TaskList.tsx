// interface
import { ITask } from '../interfaces/Task'

// css
import styles from './TaskList.module.css'

type Props = {
  taskList: ITask[]
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <p>{task.title}</p>
            <p>{task.difficult}</p>
          </div>
        ))
      ) : (<p>Não há tarefas cadastradas!</p>)}
    </>
  )
}

export default TaskList