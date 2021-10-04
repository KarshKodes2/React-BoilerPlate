import axios from "axios";

const Auth = {
	setToken(token, user) {
		localStorage.setItem("token", token);
		const User = JSON.stringify(user);
		localStorage.setItem("user", User);
		axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	},
	getToken() {
		let token = localStorage.getItem("token");
		if (!token) {
			return null;
		} else {
			return token;
		}
	},
	setUser(user) {
		const User = JSON.stringify(user);
		localStorage.setItem("user", User);
	},
	getUser() {
		return JSON.parse(localStorage.getItem("user"));
	},
	isAuthenticated() {
		if (this.getToken()) return true;
		return false;
	},
	destroyToken() {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		delete axios.defaults.headers.common["Authorization"];
		return true;
	},
};

export default Auth;
