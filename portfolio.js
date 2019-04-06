 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyBA1nSuU5FGlJ5WtTSaThJI8j_CyhCVJE0",
     authDomain: "portfolio-okoj.firebaseapp.com",
     databaseURL: "https://portfolio-okoj.firebaseio.com",
     projectId: "portfolio-okoj",
     storageBucket: "portfolio-okoj.appspot.com",
     messagingSenderId: "624418073384"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

 $(".btn ").on("click", function (event) {
     event.preventDefault();

     var name = $("#inputName3").val().trim();
     var email = $("#inputEmail3").val().trim();
     var message = $("#exampleFormControlTextarea").val().trim();

     database.fer().push({
         name: name,
         email: email,
         message: message
     });

     $("#inputName3").val("");
     $("#inputEmail3").val("");
     $("#exampleFormControlTextarea").val("");

     database.ref().on("value", function (Snapshot) {

         var name = Snapshot.val().name;
         var email = Snapshot.val().email;
         var message = Snapshot.val().message;

         console.log(name);
         console.log(email);
         console.log(message);

     })



 })