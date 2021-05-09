// importing Task and use it as Porp for Tasks
import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {

    
    return (
        <>
            {tasks.map((task,index) =>
            // keeping the id as a uniqe key and passing task as Prop
            (<Task key={index} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasks
