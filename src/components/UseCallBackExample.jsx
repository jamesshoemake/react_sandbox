import React, { useState, useCallback } from "react"

const UseCallBackExample = () => {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prev) => [...prev, "Some Task"])
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, idx) => (
        <p key={idx}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log("Button rendered")
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})

export default UseCallBackExample
