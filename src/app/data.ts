import { TaskPriority, TaskStatus } from './types'

export const seedData = [
  {
    id: 1,
    name: 'Task 1',
    assignedTo: {
      id: 1,
      name: 'User 1',
      email: 'user1@example.com',
      address: {
        street: 'Street 1',
        city: 'City 1',
        state: 'State 1',
        country: 'Country 1',
        postalCode: '12345',
      },
    },
    status: TaskStatus.Backlog,
    dueDate: new Date(),
    priority: TaskPriority.Low,
  },
  {
    id: 2,
    name: 'Task 2',
    assignedTo: {
      id: 2,
      name: 'User 2',
      email: 'user2@example.com',
      address: {
        street: 'Street 2',
        city: 'City 2',
        state: 'State 2',
        country: 'Country 2',
        postalCode: '23456',
      },
    },
    status: TaskStatus.Assigned,
    dueDate: new Date(),
    priority: TaskPriority.Medium,
  },
  {
    id: 3,
    name: 'Task 3',
    assignedTo: {
      id: 3,
      name: 'User 3',
      email: 'user3@example.com',
      address: {
        street: 'Street 3',
        city: 'City 3',
        state: 'State 3',
        country: 'Country 3',
        postalCode: '34567',
      },
    },
    status: TaskStatus.InProgress,
    dueDate: new Date(),
    priority: TaskPriority.High,
  },
  {
    id: 4,
    name: 'Task 4',
    assignedTo: {
      id: 4,
      name: 'User 4',
      email: 'user4@example.com',
      address: {
        street: 'Street 4',
        city: 'City 4',
        state: 'State 4',
        country: 'Country 4',
        postalCode: '45678',
      },
    },
    status: TaskStatus.Completed,
    dueDate: new Date(),
    priority: TaskPriority.Urgent,
  },
  {
    id: 5,
    name: 'Task 5',
    assignedTo: {
      id: 5,
      name: 'User 5',
      email: 'user5@example.com',
      address: {
        street: 'Street 5',
        city: 'City 5',
        state: 'State 5',
        country: 'Country 5',
        postalCode: '56789',
      },
    },
    status: TaskStatus.Backlog,
    dueDate: new Date(),
    priority: TaskPriority.Medium,
  },
]
