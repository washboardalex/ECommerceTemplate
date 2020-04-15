import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import ICollectionItemCollection from '../types/models/ICollectionItemCollection';
import IFirebaseShopCollection from '../types/models/IFirebaseShopCollection';
import { IShopData } from '../types/models/IShopData';

var app = firebase.initializeApp({
    apiKey: "AIzaSyD3ZAGglpIXheEuryFUycfGEjRa5Je96p0",
    authDomain: "e-commerce-toy-db.firebaseapp.com",
    databaseURL: "https://e-commerce-toy-db.firebaseio.com",
    projectId: "e-commerce-toy-db",
    storageBucket: "e-commerce-toy-db.appspot.com",
    messagingSenderId: "420768695577",
    appId: "1:420768695577:web:01060c6d232ce472737188",
    measurementId: "G-2HVD16N690"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const addCollectionAndDocuments = async (collectionKey : string, objectsToAdd : Array<Pick<ICollectionItemCollection, 'title' | 'items'>>) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections : any ) => {
    let transformedCollection = 
        collections.docs.map( (doc : firebase.firestore.DocumentData) : ICollectionItemCollection => {

            const { title, items } : IFirebaseShopCollection = doc.data();

            return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title, 
                items
            }
        });
    
    type ReduceAccumulator = {[key : string] : ICollectionItemCollection};
    return transformedCollection.reduce(
        (accumulator : ReduceAccumulator, collection : ICollectionItemCollection ) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        }, {});
}

export const createUserProfileDocument = async(userAuth : any, additionalData? : any) => {
    
    if (!userAuth) return;

    const userRef : any = firestore.doc(`users/${userAuth.uid}`);

    const snapShot : any = await userRef.get();

    if (!snapShot.exists) {
        interface IUserAuth {
            displayName: string,
            email: string
        }
        const { displayName, email  } : IUserAuth = userAuth;
        const createdAt : Date = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            });
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
