import React from "react";
/** @jsxImportSource @emotion/react */
import "twin.macro";

const ViewMore = (props) => {
	const { viewmore, disable } = props;
	return (
		<div tw="flex flex-col justify-center items-center">
			<div>
				<button tw="pl-4 pr-4" onClick={viewmore} disabled={disable}>
					{" "}
					View more{" "}
				</button>
			</div>
		</div>
	);
};

export default ViewMore;
