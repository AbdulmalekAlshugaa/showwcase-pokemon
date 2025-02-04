declare namespace auth {
    interface State {
        AuthActionName: string;
        InitialState: {
            isAuthenticated: boolean;
            user: {
                username: string | null;
                accessToken: string | null;
            };
        };
        
    }
}
