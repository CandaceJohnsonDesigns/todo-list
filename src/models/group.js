import { formatDateTime } from "../utils/formatting";

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
    parentGroupId = null, 
    createdAt = new Date().toISOString(), 
    id = crypto.randomUUID()
) {
  const raw =
    typeof nameOrRaw === "object" && nameOrRaw !== null
      ? {
          id: nameOrRaw.id ?? id,
          name: nameOrRaw.name,
          parentGroupId: nameOrRaw.parentGroupId ?? parentGroupId,
          createdAt: nameOrRaw.createdAt ?? createdAt,
        }
      : {
          id,
          name: nameOrRaw,
          parentGroupId,
          createdAt,
        };

  return {
    ...raw,

    // Pre-formatted strings & computed UI states
    formattedCreated: formatDateTime(raw.createdAt),
  };
}