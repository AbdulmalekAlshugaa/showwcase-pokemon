declare namespace pokemon {
    interface State {
        AuthActionName: string;
        isAuthenticated: boolean;
        user: {
            id: string | null;
            token: string | null;
        };
    }
}
