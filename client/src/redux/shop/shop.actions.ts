import { IShopData } from '../../types/models/IShopData';
import IActionWithPayload from '../../types/models/redux/IActionWithPayload';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import { Action, Dispatch } from 'redux';
import { 
    FETCH_COLLECTIONS_FAILURE,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_START 
} from './shop.types';


export const fetchCollectionsStart = () : Action => ({
    type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsStartAsync = () => {
    return (dispatch : Dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}

export const fetchCollectionsSuccess = (collectionsMap : IShopData) : IActionWithPayload => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage : string) : IActionWithPayload => ({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

