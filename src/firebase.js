import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAGOKhokBPx6txe8h4EOB55E5L_EWUDC4Y",
    authDomain: "goalcoach-40261.firebaseapp.com",
    databaseURL: "https://goalcoach-40261.firebaseio.com",
    projectId: "goalcoach-40261",
    storageBucket: "goalcoach-40261.appspot.com",
    messagingSenderId: "944047171691"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
