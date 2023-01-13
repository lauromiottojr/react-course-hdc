// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH360AQcWscJvqeXJzlXup_ZuK-sCwCw4",
    authDomain: "mini-blog-react-bc3b3.firebaseapp.com",
    projectId: "mini-blog-react-bc3b3",
    storageBucket: "mini-blog-react-bc3b3.appspot.com",
    messagingSenderId: "20913783069",
    appId: "1:20913783069:web:e472ff1e180d55505e61f4"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }