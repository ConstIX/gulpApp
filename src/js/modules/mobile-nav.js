function mobileNav() {
   // Mobile nav button
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.menu__body');

   iconMenu.addEventListener("click", function () {
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
      document.body.classList.toggle('lock');
   });
}

export default mobileNav;