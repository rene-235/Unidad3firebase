 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDFR1dywXu7hcEwZrpdDxadhr1ugtC6ruA",
  authDomain: "unidad3firebase-62c7c.firebaseapp.com",
  projectId: "unidad3firebase-62c7c",
  storageBucket: "unidad3firebase-62c7c.appspot.com",
  messagingSenderId: "78791407399",
  appId: "1:78791407399:web:9b0537a3c5bc6b49655b02"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Declaro Variable para mi base de datos
  var basedatos = firebase.database();
  // Variable para comunuicarme con mi html
  var app = document.getElementById('app');
  // ejemplo de innerHTML app.innerHTML = '<p>Hola que hay</p>';
// Consumir datos de Realtime
  /*var coleccion = firebase.database().ref().child('mensaje');
  coleccion.on('value', (snaphot) => {
      console.log(snaphot.val())
  });*/
 function readval(){
    var coleccion = basedatos.ref().child('users/username/');
      coleccion.on('value', (snapshot) => {
      console.log(snapshot.val());
      app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
    });
  } 
  function readget(){
      basedatos.ref('users').child('username').get().then(function(snapshot) {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        app.innerText = 'Resultado de coleccion users/username: ' + snapshot.val();
      }
      else {
        console.log("No data available");
        app.innerText = 'No data available';
      }
    }).catch(function(error) {
      console.error(error);
    });
  }
  //Agregar colección a base de datos
  function writecollection() {
    basedatos.ref('users').set({
      username: "Reneb11",
      email: "renetecpile@gmail.com",
    });
    console.log("Agregar datos");
  }
  
  