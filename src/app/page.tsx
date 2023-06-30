import TaskTable from './components/ListTasks'
import { seedData } from './data'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{
        backgroundImage: `url(https://tailwindcss-glassmorphism.vercel.app/sunset.jpg)`,
      }}
    >
      <div className="h-full w-full max-w-[80vw] max-h-[80vh] min-w-[60vw] min-h-[80vh] bg-gray-400 text-clip overflow-auto rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <TaskTable tasks={seedData} />
      </div>
    </main>
  )
}
