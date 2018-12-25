import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'test123'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('should unset uid for logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: "test123" }, action);
  expect(state).toEqual({});
});