let botone = document.getElementById("favorites");
botone.addEventListener('click', showComments);
let modalRoot= document.querySelector("#modalRoot");



function showComments (){
  //content.innerHTML= '';
  let db = firebase.firestore();
  let window= `
  <input  type="text" id="comentary" placeholder="comentary" class="form-control">
  <button class="btn btn-info" id="boton">PUBLICAR</button>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">comentarios</th>
     
    </tr>
  </thead>
  <tbody id="tabla">
   
  `
  modalRoot.innerHTML= window;



//agregar document , commit


let button= document.getElementById("boton");
button.addEventListener("click",publicar);

function publicar(){
  let comentary= document.getElementById("comentary").value;

  db.collection("comments").add({
    comentario: "comentario",
    
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("comentary").value='';
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
 console.log("funciona")
}  
  //lee comentario
let tabla = document.getElementById('tabla'); // esto no exxiste

// tenemos acceso porque las rules estan a true
firebase.firestore().collection("comments").get().then((querySnapshot) => {
  console.log("ora?")
  //tabla.innerHTML='';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
      tabla.innerHTML +=`
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data()}</td>
        </tr>
      `
  });
});

}






export default showComments;
