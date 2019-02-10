
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAegx9ghcqaht7Z5U5682gxltXIUZufxvU",
    authDomain: "united-nations-0311fs.firebaseapp.com",
    databaseURL: "https://united-nations-0311fs.firebaseio.com",
    projectId: "united-nations-0311fs",
    storageBucket: "united-nations-0311fs.appspot.com",
    messagingSenderId: "433342802807"
  };
  firebase.initializeApp(config);
  var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var email = getInputVal('email');



  
    // Save message
    saveMessage(name, email, phone);
  
  /*  // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();*/
  }

function getInputVal(id){
    return document.getElementById(id).value;
  }
  function saveMessage(name, email, phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      phone:phone,
      email:email
    });
  }