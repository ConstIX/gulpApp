function darkTheme() {

   const themeBtn = document.querySelector('.menu__switch> input');

   themeBtn.addEventListener("click", function () {
      document.body.classList.toggle('dark');
   });
}

export default darkTheme;