// Initialize Firebase
var config = {
  apiKey: "AIzaSyAr7TdMJw5mZQIGnFC_oL2gm5ZMClOCA20",
  authDomain: "portfolio-32c36.firebaseapp.com",
  databaseURL: "https://portfolio-32c36-default-rtdb.firebaseio.com",
  projectId: "portfolio-32c36",
  storageBucket: "portfolio-32c36.appspot.com",
  messagingSenderId: "774133500546",
  appId: "1:774133500546:web:a79d7162f788004fac829b",
  measurementId: "G-T77R25NTNR",
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get value
  var name = getInputVal("name");
  var email = getInputVal("email");
  var phone = getInputVal("phone");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}

// Function to get form value
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });
}
