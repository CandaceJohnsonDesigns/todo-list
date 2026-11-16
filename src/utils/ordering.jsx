import { generateKeyBetween, generateNKeysBetween } from "fractional-indexing";

/** Sort items by their fractional position string,
 * in either ascending or descending order. 
 * @param {Array} items - The list of items to sort.
 * @param {string} direction - The sort direction ('asc' or 'desc').
 * @returns {Array} - The sorted list of items.
 */
export function sortByPosition(items, direction = 'asc') {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...items].sort((a, b) => {
    if (a.position === b.position) return 0;

    return (
      (a.position < b.position ? -1 : a.position > b.position ? 1 : 0) *
      multiplier
    );
  });
}

/** 
 * Calculates the next fractional position string for an 
 * item dropped at `targetIndex`. 
 * 
 * @param {Array} items - The list of items.
 * @param {string} activeId - The ID of the active item to exclude.
 * @param {number} targetIndex - The target index for the new position.
 * @param {string} direction - The visual sort direction ('asc' or 'desc').
 * @returns {string} - The generated fractional position string.
 */
export function getNextPosition(items, activeId, targetIndex, direction = 'asc') {

  // Always sort ascending to calculate the fractional position.
  const sortedAscItems = sortByPosition(
    items.filter((item) => item.id !== activeId),
    'asc'
  );

  // Convert the target index to ascending order 
  // if viewing in descending order.    
  const ascIndex = direction === 'desc'
    ? sortedAscItems.length - targetIndex
    : targetIndex;

  const prevItem = sortedAscItems[ascIndex - 1];
  const nextItem = sortedAscItems[ascIndex];

  const prevPos = prevItem ? prevItem.position : null;
  const nextPos = nextItem ? nextItem.position : null;

  return generateKeyBetween(prevPos, nextPos);
}

/** Helper function to seed initial positions for a list of items. */
export function seedInitialPositions(items) {
  const keys = generateNKeysBetween(null, null, items.length);

  return items.map((item, index) => ({
    ...item,
    position: keys[index],
  }));
}
