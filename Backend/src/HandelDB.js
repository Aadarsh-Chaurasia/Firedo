// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getDatabase,
    ref,
    push,
    set,
    update,
    onValue,
    remove,
} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiI26z7L-hTX8_BhSWtp6rAs2s2t5Xk10",
    authDomain: "v4-dashboard.firebaseapp.com",
    databaseURL:
        "https://v4-dashboard-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "v4-dashboard",
    storageBucket: "v4-dashboard.firebasestorage.app",
    messagingSenderId: "896728595120",
    appId: "1:896728595120:web:3d7ecef99a0fdf2c091975",
    measurementId: "G-44SBCE4FQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Setting reference
const tasksInDB = ref(database, "tasksInDB");

// Writing data
export const addData = async (data) => {
    try {
        await update(tasksInDB, data);
        return `${data} added successfully`;
    }
    catch (err) {
        return err.message;
    }
};

// Read data
export const getData = async () => {
    return new Promise((resolve, reject) => {
        onValue(
            tasksInDB,
            (snapshot) => {
                const data = {};
                snapshot.forEach((childSnapshot) => {
                    const key = childSnapshot.key; // Get the key
                    const value = childSnapshot.val(); // Get the value
                    data[key] = value; // Store the key as the property and value as the value
                });
                resolve(data); // Resolve the promise with the data array
            },
            (error) => {
                reject(error); // reject if there's an error retrieving data
            }
        );
    });
};


// Remove specific item (example: remove t1)
export const removeItem = async (item) => {
    try {
        await remove(ref(database, "tasksInDB/" + item))
        console.log(`${item} removed successfully`);
    }
    catch (error) {
        console.error("Error removing item:", error);
    };
};

// addData(tasksInDB, data)
// let data2 = { "t4": "Corn" }
// push(tasksInDB, data2)  // Push will put data2 under random key in tasksInDB and it'll mess with function working with other keys
// update(tasksInDB, data2)
// removeItem("tasksInDB/t1");


