import React from "react";
import { Redirect, Route } from "react-router";
import Swal from "sweetalert2";
import Auth from "../lib/middleware/auth";
import { ROUTES } from "./routes";

const Toast = Swal.mixin({
	toast: true,
	position: "top",
	showConfirmButton: false,
	iconColor: "white",
	customClass: {
		popup: "colored-toast",
	},
	timer: 3000,
	didOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			Auth.isAuthenticated() ? (
				<Component {...props} />
			) : (
				Toast.fire({
					icon: "error",
					title: `Session expired / User is not logged in`,
				}) && (
					<Redirect
						to={{
							pathname: ROUTES.INDEX,
						}}
					/>
				)
			)
		}
	/>
);

export default PrivateRoute;
