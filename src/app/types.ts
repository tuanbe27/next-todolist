export interface Task {
  id: number
  name: string
  assignedTo: User
  status: TaskStatus
  dueDate: Date
  priority: TaskPriority
}

export interface User {
  id: number
  name: string
  email: string
  address: Address
}

export interface Address {
  street: string
  city: string
  state: string
  country: string
  postalCode: string
}

export enum TaskStatus {
  Backlog = 'BACKLOG',
  Assigned = 'ASSIGNED',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}

export enum TaskPriority {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH',
  Urgent = 'URGENT',
}
