const formlogin = document.querySelector('#formlogin')
formlogin.addEventListener('submit', (e)=>{

e.preventDefault()
const email = document.querySelector('#email').value
const password = document.querySelector('#password').value
const users = JSON.parse(localStorage.getItem('users')) || []
const validUser = users.find(user => user.email === email && user.password === password)

if(!validUser) {
return alert(' Usuario y/o contraseña incorrectos ') 
} 


alert(`🎉 ¡Bienvenido, futuro chef ${validUser.name}! 🍽️ Prepárate para una aventura culinaria increíble.`)
localStorage.setItem('login_succes', JSON.stringify(validUser))
window.location.href = '../SeccionFormulario/seccionform.html'


})