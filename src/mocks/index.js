import { initialGroups } from './data/groups';
import { initialTasks } from './data/tasks';
import { initialPlacements } from './data/placements';

export const mockBoardState = {
    views: [{ id: "view-todo", name: "Todo List", type: "list" }],
    groups: initialGroups,
    tasks: initialTasks,
    placements: initialPlacements
}