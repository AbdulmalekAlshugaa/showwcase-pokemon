

export const AUTH_INITIAL_STATE: auth.State = {
    AuthActionName: 'auth',
    InitialState: {
        isAuthenticated: false,
        user: {
            id: null,
            token: null,
        },
    },
};

