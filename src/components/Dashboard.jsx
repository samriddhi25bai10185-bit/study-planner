import { useEffect, useState } from "react"

function Dashboard() {

  const [newTask, setNewTask] = useState("")

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title: "Complete React Tutorial",
            category: "Frontend Development",
            completed: false,
          },

          {
            id: 2,
            title: "Practice DSA Questions",
            category: "Problem Solving",
            completed: false,
          },

          {
            id: 3,
            title: "Revise JavaScript",
            category: "Web Development",
            completed: false,
          },
        ]
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function addTask() {

    if (newTask.trim() === "") return

    const task = {
      id: Date.now(),
      title: newTask,
      category: "Custom Task",
      completed: false,
    }

    setTasks([...tasks, task])

    setNewTask("")
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="mt-24 bg-zinc-900 rounded-3xl overflow-hidden">

      <div className="grid md:grid-cols-4">

        {/* Sidebar */}

        <div className="bg-black p-8">

          <h2 className="text-2xl font-bold mb-10">
            Dashboard
          </h2>

          <div className="space-y-5 text-zinc-400">

            <p className="hover:text-white transition cursor-pointer">
              Overview
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Tasks
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Analytics
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Settings
            </p>

          </div>

        </div>

        {/* Main Content */}

        <div className="md:col-span-3 p-8">

          <h1 className="text-3xl font-bold">
            Today's Tasks
          </h1>

          <div className="flex flex-col md:flex-row gap-4 mt-8">

            <input
              type="text"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full flex-1 bg-black p-4 rounded-2xl outline-none"
            />

            <button
              onClick={addTask}
              className="bg-white text-black px-6 py-4 rounded-2xl font-semibold"
            >
              Add
            </button>

          </div>

          <div className="mt-10 space-y-5">

            {tasks.map((task) => (
              <div
                key={task.id}
                className="bg-black p-5 rounded-2xl flex flex-col md:flex-row gap-4 md:items-center justify-between"
              >

                <div>
                  <h2
                    className={`font-semibold ${
                      task.completed
                        ? "line-through text-zinc-500"
                        : ""
                    }`}
                  >
                    {task.title}
                  </h2>

                  <p className="text-zinc-400 text-sm mt-1">
                    {task.category}
                  </p>
                </div>

                <div className="flex gap-3 w-full md:w-auto">

                  <button
                    onClick={() => toggleTask(task.id)}
                    className="bg-white text-black px-4 py-2 rounded-xl flex-1 md:flex-none"
                  >
                    {task.completed ? "Completed" : "Done"}
                  </button>

                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 px-4 py-2 rounded-xl flex-1 md:flex-none"
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard