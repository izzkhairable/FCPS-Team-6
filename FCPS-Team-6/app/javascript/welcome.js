function getName() {
	return "User";
}

var welcome_message = 'Welcome ' + getName();
document.getElementById("welcome").innerHTML = welcome_message;