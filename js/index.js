'use srict';
// <    >   =>

window.addEventListener('DOMContentLoaded', () => {
    const containerLogin = document.getElementById('containerLogin');
    const containerRegister = document.getElementById('containerRegister');
    const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');
    const botonCloset = document.getElementById('botonCloset');
    const container = document.getElementById('container');
    const view = document.getElementById('view');

    view.addEventListener('click', () => {
        container.classList.toggle('view-active');
    });

    botonCloset.addEventListener('click', () => {
        containerLogin.style.display = 'none';
    });

    registerButton.addEventListener('click', () => {
        containerLogin.classList.remove('form-login-active');
        containerLogin.classList.add('form-login-hidden');
        
        containerRegister.classList.remove('form-register-hidden');
        containerRegister.classList.add('form-register-active');
    });

    loginButton.addEventListener('click', () => {
        containerRegister.classList.remove('form-register-active');
        containerRegister.classList.add('form-register-hidden');
        
        containerLogin.classList.remove('form-login-hidden');
        containerLogin.classList.add('form-login-active');
    });
});