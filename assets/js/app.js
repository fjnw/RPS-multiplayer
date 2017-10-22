// Initialize Firebase
var config = {
	apiKey: "AIzaSyDW8o4R6xIV7VRNuZ-4PXQgLbtsIuI6FeY",
	authDomain: "rps-multi-f0c50.firebaseapp.com",
	databaseURL: "https://rps-multi-f0c50.firebaseio.com",
	projectId: "rps-multi-f0c50",
	storageBucket: "rps-multi-f0c50.appspot.com",
	messagingSenderId: "779287020668"
};

firebase.initializeApp(config);



var auth = firebase.auth();

auth.signInWithEmailAndPassword(email, pass);
auth.createUseWithEmailAndPassword(email, pass);
auth.onAuthStateChanged(firebaseUser => { });