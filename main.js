var user="";
function mi_funcion()
{
    $('#loginModal').modal('hide')
    $("#signupModal").modal("show");
}
function correoReporte(){
    $("#reporte").modal("show");
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
            user=email;
            //close the modal
            $('#signupModal').modal('hide')
            console.log('sign up');
            window.location.replace("productos.html");
        })
});
////LOGIN
function users(){
    $("#user").val(user);
}

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
                window.location.replace("indexproducto.html");
            }else{
            if(email=='fastfood@gmail.com' && contraseña=='fastfood'){
                window.location.replace("Pedidos.html");
            }else{
                window.location.replace("productos.html");
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
            window.location.replace("productos.html");
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
            window.location.replace("productos.html");
    })
    .catch(err=>{
        console.log(err)
    })
})


