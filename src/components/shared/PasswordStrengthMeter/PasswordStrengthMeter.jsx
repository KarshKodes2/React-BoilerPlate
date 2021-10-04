import React from "react";
/** @jsxImportSource @emotion/react */
import tw, { styled } from "twin.macro";
import zxcvbn from "zxcvbn";

const PasswordChecker = styled.div`
	${tw`relative pt-1 w-full flex flex-row flex-nowrap justify-between items-center mt-3 mb-3`}
`;

const PasswordStrengthMeter = (props) => {
	const { password, className } = props;
	const [weak, setWeak] = React.useState("0");
	const [medium, setMedium] = React.useState("");
	const [strong, setStrong] = React.useState("");
	const testedResult = zxcvbn(password);

	React.useEffect(() => {
		const StrengthChecker = () => {
			switch (testedResult.score) {
				case 0:
					setMedium("0");
					setStrong("0");
					return password !== "" && setWeak("15%");
				case 1:
					setMedium("0");
					setStrong("0");
					return setWeak("25%");
				case 2:
					setWeak("0");
					setStrong("0");
					return setMedium("50%");
				case 3:
					setWeak("0");
					setMedium("0");
					return setStrong("75%");
				case 4:
					setWeak("0");
					setMedium("0");
					return setStrong("100%");
				default:
					return null;
			}
		};
		return StrengthChecker();

		// eslint-disable-next-line
	}, [password]);
	return (
		<PasswordChecker>
			<span tw="text-xs" className={className}>
				{" "}
				Password strength:
			</span>{" "}
			<div tw="overflow-hidden h-2 text-xs flex rounded bg-purple-300 w-2/5 ">
				<div
					style={{ width: weak }}
					tw="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"
				></div>
				<div
					style={{ width: medium }}
					tw="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-600"
				></div>
				<div
					style={{ width: strong }}
					tw="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
				></div>
			</div>
		</PasswordChecker>
	);
};

export default PasswordStrengthMeter;
