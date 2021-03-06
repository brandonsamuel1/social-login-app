import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
    appId: process.env.REACT_APP_APP_ID
};

export const createUserProfileDoc = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log(err)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Auth providers (Google, FB, Github)
const provider = new firebase.auth.GoogleAuthProvider();
const fb_provier = new firebase.auth.FacebookAuthProvider();
const gh_provier = new firebase.auth.GithubAuthProvider();

// Setting custom parameters for sign up
fb_provier.setCustomParameters({ prompt: 'select_account' })
provider.setCustomParameters({ prompt: 'select_account' });
gh_provier.setCustomParameters({ prompt: 'select_account' });

// exporting functions
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(fb_provier);
export const signInWithGithub = () => auth.signInWithPopup(gh_provier);

export default firebase;