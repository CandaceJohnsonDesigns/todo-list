import { formatDateTime } from "../utils/formatting";

/**
 * Creates a task model instance.
 * @param {string|Object} titleOrRaw - The title of the task or a raw task object.
 * @param {string} createdAt - The creation timestamp of the task.
 * @param {string|null} completedAt - The completion timestamp of the task.
 * @param {string} id - The unique identifier of the task.
 * @returns {Object} A task model instance.
 */
export function createTaskModel(
  titleOrRaw,
  parentTaskId = null,
  createdAt = new Date().toISOString(),
  completedAt = null,
  id = crypto.randomUUID()
) {
  // Normalize inputs into a single consistent raw object
  const raw =
    typeof titleOrRaw === "object" && titleOrRaw !== null
      ? {
          id: titleOrRaw.id ?? id,
          title: titleOrRaw.title,
          parentTaskId: titleOrRaw.parentTaskId ?? null,
          createdAt: titleOrRaw.createdAt ?? new Date().toISOString(),
          completedAt: titleOrRaw.completedAt ?? null,
        }
      : {
          id,
          title: titleOrRaw,
          parentTaskId,
          createdAt,
          completedAt,
        };

  const completedMs = raw.completedAt ? Date.parse(raw.completedAt) : null;

  return {
    ...raw,

    // Pre-formatted strings & computed UI states
    formattedCreated: formatDateTime(raw.createdAt),
    formattedCompleted: formatDateTime(raw.completedAt),
    isCompleted: Boolean(raw.completedAt),
  };
}
