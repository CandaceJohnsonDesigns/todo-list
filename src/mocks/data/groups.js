import { createGroupModel } from "../../models/group";

const mockGroups = [
    {
        id: 'group-todo',
        name: 'Todo',
        parentGroupId: null,
        createdAt: '2026-11-10T14:00:00.000Z'
    },
    {
        id: 'group-completed',
        name: 'Completed',
        parentGroupId: null,
        createdAt: '2026-11-10T14:00:00.000Z'
    }
];

export const initialGroups = mockGroups.map(createGroupModel);