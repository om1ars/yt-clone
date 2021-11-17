import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyDOyagtvgxQ0IKEtrQa6y3qp_P9mKMH580",
   authDomain: "yt-clone-a24df.firebaseapp.com",
   projectId: "yt-clone-a24df",
   storageBucket: "yt-clone-a24df.appspot.com",
   messagingSenderId: "786275713393",
   appId: "1:786275713393:web:01a5c7a9f45002efebf6d0",
 };

firebase.initializeApp(firebaseConfig)

export default firebase.auth()
