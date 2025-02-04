

export const AUTH_INITIAL_STATE: auth.State = {
    AuthActionName: 'auth',
    InitialState: {
        isAuthenticated: false,
        user: {
            username: null,
            accessToken: null,
        },
    },
};

