
import { RootState } from '../../main/src/configureStore';
import * as authSelectors from '../src/authSelectors';

describe('Test :: test user auth', () => {
    const mockState = {
        auth: {
            isAuthenticated: true,
            user: {
                username: 'test',
                accessToken: 'test',
            },
        },
    };
    test('should return login ', () => {
        const result = authSelectors.isUserLoggedIn(mockState as RootState);
        expect(result).not.toBeNull();
        expect(result).toBeTruthy();
        expect(result).toBe(true);

       

    });

   

    
    

});
