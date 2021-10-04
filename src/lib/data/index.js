import axios from "axios";
export const BASE_URL = process.env.REACT_APP_BASE_URL;

// Authentication and User API endpoints
export const loginController = async (data) => {
	const response = await axios.post(`${BASE_URL}/auth/login`, data);
	return response;
};

export const signupController = async (data) => {
	const response = await axios.post(`${BASE_URL}/auth/signup`, data);
	return response;
};
