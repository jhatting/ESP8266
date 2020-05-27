// Import the firebase package downloaded to this project folder through npm
import firebase from "firebase";

// Define a variable of the project name, which is used in the config parameters for firebase
const firebaseProjectName = "Realtime-database-3081b"

// Parameters required by the initializeApp used below
const config = {
  apiKey: "AIzaSyAeNBMZctzX9gJcj6xJV5lmczF3vccd0xw",
  authDomain: `${firebaseProjectName}.firebaseapp.com`,
  databaseURL: `https://${firebaseProjectName}.firebaseio.com`,
  projectId: `${firebaseProjectName}`
};

firebase.initializeApp(config);

export default firebase;