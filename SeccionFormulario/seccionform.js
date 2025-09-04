const user = JSON.parse(localStorage.getItem('login_succes')) || false
if(!user) {

window.location.href = '../Formulario Iniciar Sesion/formlogin.html'

}


const regresar = document.querySelector('#regresar');
const regresarMobile = document.querySelector('#regresar-mobile');

function cerrarSesion() {
	alert(`🤗 ¡Hasta pronto! Te esperamos con los brazos abiertos en nuestra institución, donde cada día es una nueva oportunidad para crecer y perfeccionar tu arte culinario. 🍽️✨`);
	localStorage.removeItem('login_succes');
	window.location.href = '../Formulario Iniciar Sesion/formlogin.html';
}

if (regresar) {
	regresar.addEventListener('click', cerrarSesion);
}
if (regresarMobile) {
	regresarMobile.addEventListener('click', cerrarSesion);
}


