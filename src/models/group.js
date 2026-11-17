import { formatDateTime } from "../utils/formatting";
import { generateKeyBetween } from 'fractional-indexing';

/**
 * Creates a group model instance.
 * @param {string|Object} nameOrRaw - The name of the group or a raw group object.
 * @param {string|null} parentGroupId - The ID of the parent group.
 * @param {string} createdAt - The creation timestamp of the group.
 * @param {string} id - The unique identifier of the group.
 * @returns {Object} A group model instance.
 */
export function createGroupModel(
    nameOrRaw, 
    viewId,
    parentGroupId = null, 
    groupRole = 'active',
    sortDirection = 'asc',
    position = generateKeyBetween(null, null),
    createdAt = new Date().toISOString(), 
    id = crypto.randomUUID()
) {
  const raw =
    typeof nameOrRaw === "object" && nameOrRaw !== null
      ? {
          id: nameOrRaw.id ?? id,
          name: nameOrRaw.name,
          viewId: nameOrRaw.viewId ?? viewId,
          parentGroupId: nameOrRaw.parentGroupId ?? null,
          groupRole: nameOrRaw.groupRole ?? groupRole,
          sortDirection: nameOrRaw.sortDirection ?? 'asc',
          position: nameOrRaw.position ?? null,
          createdAt: nameOrRaw.createdAt ?? new Date().toISOString(),
        }
      : {
          id,
          name: nameOrRaw,
          viewId,
          parentGroupId,
          groupRole,
          sortDirection,
          position,
          createdAt,
        };

  return {
    ...raw,

    // Pre-formatted strings & computed UI states
    formattedCreated: formatDateTime(raw.createdAt),
  };
}