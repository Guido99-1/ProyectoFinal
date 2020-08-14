function mi_funcion()
{
    $('#loginModal').modal('hide')
    $("#signupModal").modal("show");
}

///REGISTRO
const formulario = document.querySelector('#form');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const contraseña = document.querySelector('#password').value;

    //console.log(email, contraseña)

    auth
        .createUserWithEmailAndPassword(email, contraseña)
        .then(userCredential => {
            //clear the form
            formulario.reset();

            //close the modal
            $('#signupModal').modal('hide')
            console.log('sign up');
            window.location.replace("cliente.html");
        })
});
////LOGIN

const Formlogin = document.querySelector('#formlogin');
Formlogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#loginemail').value;
    const contraseña = document.querySelector('#loginpassword').value;
    //console.log(email,contraseña)
    
    auth
        .signInWithEmailAndPassword(email, contraseña)
        .then(userCredential => {
            //clear the form
            formulario.reset();
            //close the modal
            $('#signupModal').modal('hide')
            console.log('sign up');
            
            if(email=='admin@gmail.com' && contraseña=='admin1'){
                window.location.replace("ResumenGestion.html");
            }else{
            if(email=='fastfood@gmail.com' && contraseña=='fastfood'){
                window.location.replace("Pedidos.html");
            }else{
            window.location.replace("cliente.html");
                }
            }
        })
         .catch(err=>{
            alert('Contraseña o correo INCORRECTOS')
         })
})

//
// const salir = document.querySelector('#salir');
// salir.addEventListener('click', e => {
//     e.preventDefault();
//     auth.signOut().then(() => {
//         console.log('sign out')
//     })
// });

//google

const btngoogle= document.querySelector('#googlelogin')
btngoogle.addEventListener('click', e=>{
    const google= new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(google)
    .then(result =>{
        formulario.reset();
            $('#loginModal').modal('hide')
            console.log('inicio con google')
            window.location.replace("cliente.html");
    })
    .catch(err=>{
        console.log(err)
    })
})

//facebook
const btnfacebook= document.querySelector('#facebooklogin')
btnfacebook.addEventListener('click', e=>{
    e.preventDefault();
    const face= new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(face)
    .then(result =>{
        console.log(result)
        formulario.reset();
            $('#loginModal').modal('hide')
            console.log('inicio con google')
            window.location.replace("cliente.html");
    })
    .catch(err=>{
        console.log(err)
    })
})


//Traer productos

const producto=document.querySelector('.products');
const datos=data =>{
    if(data.length){
        let html='';
        data.forEach(doc =>{
            const pots =doc.data()
            const li=`
            <li class="list-group-item list-group-item-action">
                <h5>${pots.Producto}</h5>
                <h3> ${pots.Precio}</h3>
                <h3> ${pots.Marca}</h3>
            </li>
            `;
            html+=li;
        });
        producto.innerHTML=html;
    }
}
//events
//lista de productos a usuarios login

auth.onAuthStateChanged(user =>{
    if(user){
        fs.collection('Productos')
        .get()
        .then((snapshot)=>{
            datos(snapshot.docs)
        })
    }else{
        datos([])
    }
})