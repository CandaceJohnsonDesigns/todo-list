import { createGroupModel } from "../../models/group";

const mockGroups = [
  {
    id: "group-todo",
    viewId: "view-todo",
    parentGroupId: null,
    name: "Todo",
    groupRole: "active",
    sortDirection: "asc",
    position: "a0",
    createdAt: "2026-11-10T14:00:00.000Z",
  },
  {
    id: "group-completed",
    viewId: "view-todo",
    parentGroupId: null,
    name: "Completed",
    groupRole: "completed",
    sortDirection: "asc",
    position: "a1",
    createdAt: "2026-11-10T14:00:00.000Z",
  },
];

export const initialGroups = mockGroups.map(createGroupModel);
