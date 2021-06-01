burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
  rightnav.classList.toggle('v-class-resp');
  navList.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');

})
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}
