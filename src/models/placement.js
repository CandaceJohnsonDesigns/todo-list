import { generateKeyBetween } from 'fractional-indexing';

/**
 * Creates a placement model instance.
 * @param {string|Object} groupIdOrRaw - The ID of the group or a raw placement object.
 * @param {string} taskId - The ID of the task.
 * @param {string|null} parentPlacementId - The ID of the parent placement.
 * @param {string} position - The position of the placement.
 * @param {string} createdAt - The creation timestamp of the placement.
 * @param {string} id - The unique identifier of the placement.
 * @returns {Object} A placement model instance.
 */
export function createPlacementModel(
    groupIdOrRaw, 
    taskId,
    parentPlacementId = null,
    position = generateKeyBetween(null, null),
    createdAt = new Date().toISOString(),
    id = crypto.randomUUID()
) {
    const raw =
    typeof groupIdOrRaw === 'object' && groupIdOrRaw !== null
    ? {
        id: groupIdOrRaw.id ?? id,
        groupId: groupIdOrRaw.groupId,
        taskId: groupIdOrRaw.taskId ?? taskId,
        parentPlacementId: groupIdOrRaw.parentPlacementId ?? null,
        position: groupIdOrRaw.position ?? null,
        createdAt: groupIdOrRaw.createdAt ?? new Date().toISOString()
    } :
    {
        id,
        groupId: groupIdOrRaw,
        taskId,
        parentPlacementId: parentPlacementId ?? null,
        position,
        createdAt,
    }

  return {
    ...raw,
  };
}