var firebaseConfig = {
    apiKey: "AIzaSyCXkgEs1pUfAD9ib-JEqWCxw6tx5vxr3qM",
    authDomain: "portfolio-contact-form-4f0c0.firebaseapp.com",
    databaseURL: "https://portfolio-contact-form-4f0c0.firebaseio.com",
    projectId: "portfolio-contact-form-4f0c0",
    storageBucket: "portfolio-contact-form-4f0c0.appspot.com",
    messagingSenderId: "959448939689",
    appId: "1:959448939689:web:899bc7a73269e091403db8"
};

// init Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

const submitButton = document.getElementById('submit-button');

let contactName = document.getElementById('contact-name');
let contactEmail = document.getElementById('contact-email');
let contactSubject = document.getElementById('contact-subject');
let contactMessage = document.getElementById('contact-message');

const db = firestore.collection("contactData");

submitButton.addEventListener('click', function() {
    let contactNameInput = contactName.value;
    let contactEmailInput = contactEmail.value;
    let contactSubjectInput = contactSubject.value;
    let contactMessageInput = contactMessage.value;

    // access the data collection 
    db.doc().set({
        name: contactNameInput,
        email: contactEmailInput,
        subject: contactSubjectInput,
        message: contactMessageInput
    })
    .then(function() {
        console.log("Data Saved");
    })
    .catch(function(error) {
        console.log(error);
    });

    contactName.value = null;
    contactEmail.value = null;
    contactSubject.value = null;
    contactMessage.value = null;
});