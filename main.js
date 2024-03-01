// === Nav bar 2====//
 const navBar = document.querySelector(`.nav-bar`);
 const toggleMenu= document.querySelector(`.right .menu`);
 const closeMenu =document.querySelector(`.luxurey .close`);
 const navLinks = document.querySelector(`.nav-bar .luxurey`);

toggleMenu.addEventListener(`click`,()=>{
    navLinks.style.left="0";
});
closeMenu.addEventListener(`click`,()=>{
    navLinks.style.left ="-350px";
})
window.onscroll=()=>{
    navBar.classList.add(`place`);
}
