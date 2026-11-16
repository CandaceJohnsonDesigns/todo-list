/**
 * Formats a duration in milliseconds into a human-readable string.
 * @param {*} ms
 * @returns {string} A duration in days, hours, and minutes
 */
export function formatDuration(ms) {
    if (ms === null || ms === undefined) return '-';
    const absMs = Math.abs(ms);

    const days = Math.floor(absMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((absMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((absMs % (1000 * 60 * 60)) / (1000 * 60));

    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0) parts.push(`${hours}h`);
    if (minutes > 0 || parts.length === 0) parts.push(`${minutes}m`);

    return parts.join(' ');
}

/**
 * Formats an ISO string into a human-readable date and time string.
 * @param {string} isoString
 * @returns {string} A human-readable date and time string
 */
export function formatDateTime(isoString) {
    if (!isoString) return 'Not set';

    const ms = Date.parse(isoString);
    if (Number.isNaN(ms)) return 'Invalid date';

    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    }).format(ms);
}