import { all } from 'redux-saga/effects';
// we could have all or thunk here but we are not using it right now

export default function* rootSaga() {
    // put all your sagas here in order to add more sagas in cases if we scale up our app
    yield all([]);
}
