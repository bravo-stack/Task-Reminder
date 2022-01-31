import Header from "./components/Header";
import Tasks from "./components/Tasks"
import Notask from "./components/Notask";
import Addtask from "./components/Addtask";
import {useState} from "react"
 
function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
])

// Show or add task
const [showAddTask, setShowAddTask] = useState(false)

// Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {id: id, text: task.text, day: task.day, reminder: !task.reminder} : task))
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
    </div>
  );
}

export default App;
