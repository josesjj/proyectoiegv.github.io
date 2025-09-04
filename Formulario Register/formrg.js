const formregister = document.querySelector('#formregister')
formregister.addEventListener('submit', (e)=>{

 e.preventDefault()
 
 const nombre = document.querySelector('#nombre').value 
 const email = document.querySelector('#email').value
 const password = document.querySelector('#password').value

 const users = JSON.parse(localStorage.getItem('users')) || []
 const isUserRegistered = users.find(user => user.email === email)
 if(isUserRegistered) {
  
    return alert(' El usuario ya esta registrado ')

}

users.push({name: nombre, email: email, password: password})
localStorage.setItem('users', JSON.stringify(users))
alert(' Registro Exitoso ')

//Login ida //

window.location.href = '../Formulario Iniciar Sesion/formlogin.html'




})