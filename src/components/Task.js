// after install the react-icons we import it

import { FaTimes } from 'react-icons/fa'

// passing task as aprop for Task to be defind
// and taking each text from the arr according to the key
// which we chosse it as the id.
const Task = ({task ,onDelete ,onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=> onToggle(task.id)}>
            <h3>{task.text} {''}
            {/* the x icon is here */}
            <FaTimes style={{color:'red', cursor:'pointer'}} 
            onClick={() => onDelete(task.id)}/>
            </h3>
            <p>{task.day}</p>
        </div>
    )
} 

export default Task
