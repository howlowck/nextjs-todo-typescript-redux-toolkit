import { Dispatch, FC, FormEventHandler, MouseEvent, MouseEventHandler, useState } from 'react'
import styles from '../styles/Home.module.css'
import tasklistStyles from '../styles/TaskList.module.css'
import { setStatus, createTask } from '../redux/slices/tasks'
import { Task } from '../types'
import { useAppDispatch } from '../redux/hooks'

type Props = {
	tasks: Task[]
}

const TaskList: FC<Props> = ({tasks}) => {
	const dispatch = useAppDispatch()
	const [name, setName] = useState('')

	const setStatusAction = (taskId: string, done: boolean): MouseEventHandler<HTMLButtonElement>	=>
   	(evt) => {
			dispatch(setStatus({taskId, done}))
		}
	
	const list = tasks.map(task => {
		return (
			<li key={task.id} className={task.done ? tasklistStyles.completed : ""}>
				{task.name}
				<button 
					className={tasklistStyles.done}
					onClick={task.done? setStatusAction(task.id, false): setStatusAction(task.id, true)}
				>
					{task.done ? "Undo" : "Done"}
				</button>
			</li>
		)
	})
	
	const submit: FormEventHandler<HTMLFormElement> = (evt) => {
		evt.preventDefault()
		dispatch(createTask({name}))
		setName('')
	}

  return (
    <div className={styles.container}>
			<ol className={tasklistStyles.tasklist}>
				{list}
				<li className="new-task">
					<form action="" onSubmit={submit}>
						<input type="text" name="task-name" id="task-name" value={name} onChange={(evt) => setName(evt.target.value)} />
						<input type="submit" name="submit" value="add" />
					</form>
				</li>
			</ol>
    </div>
  )
}

export default TaskList
