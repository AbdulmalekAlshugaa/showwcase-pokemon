declare namespace auth {
    interface State {
        AuthActionName: string;
        InitialState: {
            isAuthenticated: boolean;
            user: {
                id: string | null;
                token: string | null;
            };
        };
        
    }
}
