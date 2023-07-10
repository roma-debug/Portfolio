let menu = document.querySelector('#menu-bars');
let navbar_link = document.querySelector('.navbar_link');

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbar_link.classList.toggle('active');
}
