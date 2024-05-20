/**
 * Formats a date string into a more readable format.
 * 
 * @param {string} date - The date string to format.
 * @param {Object} config - Optional configuration for date formatting.
 * @returns {string} The formatted date.
 */
export const formatDate = (date, config) => {
    // Set default options for date formatting
    const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    // Use the provided configuration or default options
    const options = config || defaultOptions;

    // Create a new Date object and format it according to the specified options
    return new Date(date).toLocaleDateString('en-US', options);
}
