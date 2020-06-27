import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FiREBASE_API_KEY,
  authDomain: process.env.FiREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FiREBASE_DATABASE_URL,
  projectId: process.env.FiREBASE_PROJECT_ID,
  storageBucket: process.env.FiREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FiREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FiREBASE_APP_ID,
  measurementId: process.env.FiREBASE_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
}

export default firebase
