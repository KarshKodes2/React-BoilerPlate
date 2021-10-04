
const initialState = {
    user: {},
    isAuth: false,
}

//selectors
export const getUser = (state) => state.user.user;
export const getAuth = (state) => state.user.isAuth;


//reducers
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        case 'SIGNUP':
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        
        default:
            return {
                ...state
            };
    }
}