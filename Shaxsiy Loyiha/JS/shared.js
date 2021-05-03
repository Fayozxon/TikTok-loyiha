
/* Navigation */


var home = document.getElementById("homeLink");
var about = document.getElementById("aboutLink");
var clients = document.getElementById("clientsLink");
var services = document.getElementById("servicesLink");
var blog = document.getElementById("blogLink");

home.addEventListener("click", function(){
	home.classList.add("active");
	about.classList.remove("active");
	clients.classList.remove("active");
	services.classList.remove("active");
	blog.classList.remove("active");
})

about.addEventListener("click", function(){
	about.classList.add("active");
	home.classList.remove("active");
	clients.classList.remove("active");
	services.classList.remove("active");
	blog.classList.remove("active");
})

clients.addEventListener("click", function(){
	clients.classList.add("active");
	home.classList.remove("active");
	about.classList.remove("active");
	services.classList.remove("active");
	blog.classList.remove("active");
})

services.addEventListener("click", function(){
	services.classList.add("active");
	home.classList.remove("active");
	about.classList.remove("active");
	clients.classList.remove("active");
	blog.classList.remove("active");
})

blog.addEventListener("click", function(){
	blog.classList.add("active");
	home.classList.remove("active");
	about.classList.remove("active");
	clients.classList.remove("active");
	services.classList.remove("active");
})