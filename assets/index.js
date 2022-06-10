//mobile menu 
const burgerIcon= document.querySelector('#burger');
const navBarMenu= document.querySelector('#nav-links');

burgerIcon.addEventListener ('click',() => {
    console.log('clicked!');
    navBarMenu.classList.toggle('is-active')
})