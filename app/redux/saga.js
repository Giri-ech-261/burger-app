import { all } from 'redux-saga/effects';
import {productSaga} from './Product/sagas';
import {petSaga} from './MyPets/sagas';
import {ArticlesSaga} from './Articles/sagas';
import {adminSaga} from './AdminLogin/sagas';
import {formSaga} from './form/sagas';
import {storesSaga} from './StoreLocator/sagas';
import {categorySaga} from './Category/sagas';

export function* rootSaga() {
    return yield all([
        productSaga(),
        petSaga(),
        ArticlesSaga(),
        adminSaga(),
        formSaga(),
        storesSaga(),
        categorySaga()
    ]);
}
