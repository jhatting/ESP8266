// Import the firebase package downloaded to this project folder through npm
import firebase from "firebase";

// Define a variable of the project name, which is used in the config parameters for firebase
const firebaseProjectName = "realtime-database-3081b"

// Parameters required by the initializeApp used below
const config = {
  apiKey: "AIzaSyAeNBMZctzX9gJcj6xJV5lmczF3vccd0xw",
  authDomain: `$realtime-database-3081b.firebaseapp.com`,
  databaseURL: `https://$realtime-database-3081b.firebaseio.com`,
  projectId: `$realtime-database-3081b`
};

firebase.initializeApp(config);

export default firebase;