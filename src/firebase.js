import { initializeApp, getApps } from 'firebase/app';
import { initializeFirestore, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC564hmPIHm12fqpVPFIVybT8QABPNka5g",
  authDomain: "chapter-app-61337.firebaseapp.com",
  projectId: "chapter-app-61337",
  storageBucket: "chapter-app-61337.firebasestorage.app",
  messagingSenderId: "937780614576",
  appId: "1:937780614576:web:5bd03627778f7609b4f275",
  measurementId: "G-V3PLM2RK4D"
};

// Only initialize if not already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Try to get existing Firestore instance, or initialize with database ID
let db;
try {
  db = getFirestore(app, "default");
} catch (error) {
  db = initializeFirestore(app, { databaseId: "default" });
}

export { db };
export const auth = getAuth(app);
export const storage = getStorage(app);