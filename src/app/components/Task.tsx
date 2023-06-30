import React from 'react'
import { Task } from '@app/types'
import moment from 'moment'

const TaskComponent = ({ task }: { task: Task }) => {
  return (
    <tr key={task.id}>
      <td className="px-6 py-4 whitespace-nowrap">{task.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{task.assignedTo.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{task.status}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {moment(task.dueDate).format()}
      </td>
    </tr>
  )
}
export default TaskComponent
