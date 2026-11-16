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
          createdAt: titleOrRaw.createdAt || createdAt,
          completedAt: titleOrRaw.completedAt || completedAt,
        }
      : {
          id,
          title: titleOrRaw,
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
