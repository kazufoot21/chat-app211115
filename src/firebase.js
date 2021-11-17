import firebase from 'firebase';
const firebaseConfig = {
    apiKey: 'AIzaSyAxLR_bYrDoCh2RxdfvUJPBnV9Qt_g7ln0',
    authDomain: 'chat-app-3458a.firebaseapp.com',
    projectId: 'chat-app-3458a',
    storageBucket: 'chat-app-3458a.appspot.com',
    messagingSenderId: '930920722824',
    appId: '1:930920722824:web:78aa5e256ecc33d8728a3d',
};

firebase.initializeApp(firebaseConfig); //初期化

const database = firebase.database();
const messagesRef = database.ref('messages'); //どういった名前空間にぶら下げるか指示

export const pushMessage = ({name, text}) => {
    messagesRef.push({name, text});
};
