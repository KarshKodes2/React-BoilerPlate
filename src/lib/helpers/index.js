// export const numberWithCommas = (str) => {
// 	const strz =
// 		str !== null && str !== undefined && str !== "" && str !== 0
// 			? str.toString()
// 			: (str = "0");
// 	return strz.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

export const numberFormat = (value) => {
	new Intl.NumberFormat().format(!isNaN(value) && value);
};
