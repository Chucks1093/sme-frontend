/**
 * Shortens a string (typically an address) by showing the first and last few characters
 * @param str - The string to shorten
 * @param chars - Number of characters to show at the start and end (default: 4)
 * @returns Shortened string with ellipsis
 */
export const shortenAddress = (str: string, chars: number = 4): string => {
	if (!str) return "";
	if (str.length <= chars * 2) return str;
	return `${str.substring(0, chars)}...${str.substring(str.length - chars)}`;
};

/**
 * Adds a leading zero to numbers less than 10
 * @param n - The number to format
 * @returns String with leading zero if necessary
 */
export const addZero = (n: number): string => {
	return n < 10 ? `0${n}` : `${n}`;
};

export const textColorMap = {
	"#ddd6fe": "#5b21b6", // Corresponding text color for the background
	"#fbcfe8": "#9d174d",
	"#d9f99d": "#3f6212",
	"#bae6fd": "#075985",
	"#a7f3d0": "#065f46",
	"#f5d0fe": "#86198f",
} as const;
