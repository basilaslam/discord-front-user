import * as firebase from 'firebase/app';
import 'firebase/storage';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: "AIzaSyAkswGvYg9cGPFCafWYOxBLJppK9qzTpIc",
	authDomain: "discordclone-53f88.firebaseapp.com",
	projectId: "discordclone-53f88",
	storageBucket: "discordclone-53f88.appspot.com",
	messagingSenderId: "522406160593",
	appId: "1:522406160593:web:c7d617ae6e8a443421bdf0",
	measurementId: "G-SHXCBWZXM4"
  };

// Initialize Firebase app with Storage module
 const app = firebase.initializeApp(firebaseConfig);
 const storage = getStorage(app)

 export default storage