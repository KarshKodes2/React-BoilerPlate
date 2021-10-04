// eslint-disable-next-line
import tw from "twin.macro";

export const icons = {
	arrow_head: "/svg/arrow_head.svg",
};

export const ArrowBack = (props) => {
	const { onClick, className } = props;
	return (
		<button onClick={onClick}>
			<img
				src="/svg/back_arrow.svg"
				alt=""
				tw="p-3 bg-gray-400 rounded mb-2 fill-current text-gray-600 hover:bg-gray-600"
				onClick={onClick}
				className={className}
			/>
		</button>
	);
};

export const Warning = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
			/>
		</svg>
	);
};

export const WrongIcon = (props) => {
	return (
		<svg width="16" height="16" viewBox="0 0 17 17" tw="mr-2" {...props}>
			<path
				fill="#FFF"
				d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
			/>
			<path
				fill="#6772e5"
				d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
			/>
		</svg>
	);
};

export const EditInactiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13V16H7L16 7L13 4L4 13Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
		</svg>
	);
};

export const EditActiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13V16H7L16 7L13 4L4 13Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
		</svg>
	);
};

export const DuplicateInactiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4H12V12H4V4Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path
				d="M8 8H16V16H8V8Z"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
		</svg>
	);
};

export const DuplicateActiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 4H12V12H4V4Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path
				d="M8 8H16V16H8V8Z"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
		</svg>
	);
};

export const ArchiveInactiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="8"
				width="10"
				height="8"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<rect
				x="4"
				y="4"
				width="12"
				height="4"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
};

export const ArchiveActiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="8"
				width="10"
				height="8"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<rect
				x="4"
				y="4"
				width="12"
				height="4"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
};

export const MoveInactiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
			<path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
			<path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
};

export const MoveActiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
};

export const DeleteInactiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="6"
				width="10"
				height="10"
				fill="#EDE9FE"
				stroke="#A78BFA"
				strokeWidth="2"
			/>
			<path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
			<path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
		</svg>
	);
};

export const DeleteActiveIcon = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="5"
				y="6"
				width="10"
				height="10"
				fill="#8B5CF6"
				stroke="#C4B5FD"
				strokeWidth="2"
			/>
			<path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
			<path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
		</svg>
	);
};
