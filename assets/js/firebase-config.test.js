import { firebaseConfig } from "./firebase-config.js";
const firebaseTestApp = firebase.initializeApp(firebaseConfig, "testApp");
export const authTest = firebaseTestApp.auth();