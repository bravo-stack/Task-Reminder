import Header from "./components/Header";
import Tasks from "./components/Tasks"
import Notask from "./components/Notask";
import Addtask from "./components/Addtask";
import Footer from "./components/Footer";
import {useState, useEffect} from "react"

 
function App() {

  const [tasks, setTasks] = useState([])


  // use effect
  useEffect(() => {
    
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()

    fetchTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const promise = await fetch("http://localhost:5000/tasks")
    const data = await promise.json()
    return data
  }

  // Fetch  Single Task
  const fetchTask = async (id) => {
    const promise = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await promise.json()
    return data
  }


  // Show or add task
  const [showAddTask, setShowAddTask] = useState(false)


  // Add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])

  }


  // Delete Tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    // get single task with id, and modify
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    // update server's task at id
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }



  return (
    <div className="container">
      
      <Header btnColor="rgb(66, 103, 184)" title="Task Tracker" showAdd={() => setShowAddTask(!showAddTask)} showState={showAddTask} />


      { showAddTask && <Addtask bgColor="rgb(66, 103, 184)" onAdd={addTask} />}
      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          <Notask />
        )}
        <Footer />
    </div>
  );
}

export default App;
