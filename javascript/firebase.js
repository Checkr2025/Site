const firebaseConfig = {
    apiKey: "AIzaSyDRbAm9pLLWL-_2hYiv802r4CNoxuZ25A4",
    authDomain: "checkr---responses.firebaseapp.com",
    databaseURL: "https://checkr---responses-default-rtdb.firebaseio.com",
    projectId: "checkr---responses",
    storageBucket: "checkr---responses.firebasestorage.app",
    messagingSenderId: "838658294978",
    appId: "1:838658294978:web:99a1f161e28af80510675b",
    measurementId: "G-QN0SQ9T8FS"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    if (!fullName || !email || !phone || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const newMessageRef = db.ref('contact_responses').push();
    newMessageRef.set({
      fullName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    }).then(() => {
      document.getElementById('formStatus').textContent = "Message sent successfully!";
      document.getElementById('contactForm').reset();
    }).catch(error => {
      console.error("Error saving message:", error);
      document.getElementById('formStatus').textContent = "Something went wrong. Please try again.";
    });
  });