const fadeInContents = document.querySelectorAll('.js-fadeIn');

fadeInContents.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - 250){
       fadeIn.classList.add('is-scrollIn');
    }
  });
});