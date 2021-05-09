import { useState , useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About'

function App() {
  const [showAddTask , setShowAddTask] = useState(false)
  const [tasks , setTasks ] = useState([])
  
  // useEffect 
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
      getTasks()
  }, [])

  // Fetching Tasks from the backend
    const fetchTasks = async () => {
      const result = await fetch('http://localhost:5000/tasks')
      const data = await result.json()
      console.log(data)
      return data
    }

  // Fetching Task from the backend // just for fix the reminder in UI
  const fetchTask = async (id) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await result.json()
    return data
  }


  // Add Task
  const addTask = async (task) => {
    const result = await fetch('http://localhost:5000/tasks', {
      // post method because we adding data to the UI
      method: 'POST',
      // since we adding data, we need to add headers = SO IMPORTANT
      headers: { 
        'Content-type': 'application/json'
      },
      // just to convert it from JS type to JSON type
      body: JSON.stringify(task)
    })

    const data =await result.json()

    setTasks([...tasks, data])

    
    // // getting a random number and set to the id 
    // const id = Math.floor(Math.random() * 10000) + 1
    // // giving the new task an id
    // const newTask = {id , ...task}
    // // adding the new task to the arr
    // setTasks([...tasks, newTask])
  }
  //Delete Task function
  const deleteTask = async (id) => {
    // delete from the server as well 
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    // getting the task and then creating a new task 
    // and put it in a variable
    const taskToToggle = await fetchTask(id)
    const updateTask = {...taskToToggle, 
    reminder: !taskToToggle.reminder}

    //just fetching the data form the Backend server
    const result = await fetch(`http://localhost:5000/tasks/${id}`,{
      // since we updating so we use PUT method
      method: 'PUT',
      // sending data
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await result.json()

    setTasks(tasks.map((task) =>
    // setting the reminder to the other value
    task.id === id ? {...task, reminder: data.reminder} : task
    ))
  }

  return (
    <Router>
    {/* Rendering the Header.js  */}
    <div className="container">
      <Header onAdd={() => setShowAddTask
        (!showAddTask)} showAdd={showAddTask}/>

      {/* it is false by defualt so it will not show the task,
      just a short way to write the if also because we don't
      need to use ELSE */}
      
      <Route path='/' exact 
      render={(props) => (
        <>
        {showAddTask && <AddTask onAdd={addTask}/>}

        {/* this an if condtion just in case we do have any 
        task to show ,will show this message */}
        { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}

        onToggle = {toggleReminder}
        />):('No Tasks to Show')}
        </>
      )}/>
      <Route path='/about' component={About}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
