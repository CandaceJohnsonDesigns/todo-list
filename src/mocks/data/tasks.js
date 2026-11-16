import { createTaskModel } from "../../models/task";
const mockTasks = [
  {
    id: "task-1",
    title: "Buy groceries",
    createdAt: "2026-11-10T14:00:00.000Z",
    completedAt: null,
  },
  {
    id: "task-2",
    title: "Walk the dog",
    createdAt: "2026-11-10T14:00:00.000Z",
    completedAt: "2026-11-10T16:00:00.000Z",
  },
  {
    id: "task-3",
    title: "Read a book",
    createdAt: "2026-11-10T14:00:00.000Z",
    completedAt: null,
  },
  {
    id: "task-4",
    title: "Write a blog post about the book",
    createdAt: "2026-11-10T14:02:00.000Z",
    completedAt: null,
  }
];

export const initialTasks = mockTasks.map(createTaskModel);
